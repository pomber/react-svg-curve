import * as React from 'react';
import { line, curveCatmullRomClosed } from 'd3-shape';
import { Curve, CurveProps } from './curve';

type Props = {
  data: [number, number][];
  alpha?: number;
} & Omit<CurveProps, 'path'>;

export default function({ data, alpha = 0.5, ...props }: Props) {
  const d = line().curve(curveCatmullRomClosed.alpha(alpha))(data) || '';
  return <Curve path={d} data={data} {...props} />;
}
