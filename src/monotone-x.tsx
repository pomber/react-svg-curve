import * as React from 'react';
import { line, curveMonotoneX } from 'd3-shape';
import { Curve, CurveProps } from './curve';

type Props = {
  data: [number, number][];
} & Omit<CurveProps, 'path'>;

export default function({ data, ...props }: Props) {
  const d = line().curve(curveMonotoneX)(data) || '';
  return <Curve path={d} data={data} {...props} />;
}
