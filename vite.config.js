import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { execSync } from 'node:child_process'


const currentCommit = execSync("git rev-parse --short HEAD").toString();
const date = new Date();
const dateString = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;

// A helper plugin which specifically watches for changes to public/dsp.main.js,
// which is built in a parallel watch job via esbuild during dev.
//
// We can still use Vite's HMR to send a custom reload-dsp event, which is caught
// inside the webview and propagated to native to reinitialize the embedded js engine.
//
// During production builds, this all gets pruned from the bundle.
function pubDirReloadPlugin() {
  return {
    name: 'pubDirReload',
    // @ts-ignore
    handleHotUpdate({file, modules, server}) {
      if (file.includes('public/dsp.main.js')) {
        server.ws.send({
          type: 'custom',
          event: 'reload-dsp',
        });
      }
      return modules;
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
 
  base: './',
 
server: {
  fs: {
    allow: ['/public', '/static'],
  },
},
  define: {
    __COMMIT_HASH__: JSON.stringify(currentCommit),
    __BUILD_DATE__: JSON.stringify(dateString),
  },
  plugins: [sveltekit(), pubDirReloadPlugin(), purgeCss()],
})
