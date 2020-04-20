import * as React from 'react';
import { line, curveBundle } from 'd3-shape';
import { Curve, CurveProps } from './curve';

type Props = {
  data: [number, number][];
  beta?: number;
} & Omit<CurveProps, 'path'>;

export default function({ data, beta = 0.85, ...props }: Props) {
  const d = line().curve(curveBundle.beta(beta))(data) || '';
  return <Curve path={d} data={data} {...props} />;
}
