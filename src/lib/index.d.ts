// Definitions for the shape of parameter data

export type ParameterDataUI = {
  paramId: string;
  name: string;
  min: number;
  max: number;
  defaultValue: number;
};

export type ParameterDataFromHost = ParameterDataUI & { sampleRate: number };

export interface ManifestData {
  window: {
    width: number;
    height: number;
  };
  parameters: Array<ParameterDataUI>;
}
