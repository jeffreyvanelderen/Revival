export enum MeasuringType {
  METRIC = 'metric',
  IMPERIAL = 'imperial',
}

export const MeasuringTypeWeightUnit: Record<MeasuringType, string> = {
  [MeasuringType.IMPERIAL]: 'lbs',
  [MeasuringType.METRIC]: 'kg',
};

export const MeasuringTypeLengthUnit: Record<MeasuringType, string> = {
  [MeasuringType.IMPERIAL]: 'inch',
  [MeasuringType.METRIC]: 'centimeters',
};
