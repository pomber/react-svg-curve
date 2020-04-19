import * as React from 'react';
import { line } from 'd3-shape';
import { Curve, CurveProps } from './curve';

type Props = {
  data: [number, number][];
} & Omit<CurveProps, 'path'>;

export default function({ data, ...props }: Props) {
  const d = line()(data) || '';
  return <Curve path={d} data={data} {...props} />;
}
