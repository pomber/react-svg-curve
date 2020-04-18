import * as React from 'react';
import * as d3 from 'd3-shape';

type CurveProps = { knobs: [number, number][] } & React.SVGProps<
  SVGPathElement
>;

export function Curve({ knobs, ...props }: CurveProps) {
  const d = d3.line().curve(d3.curveCatmullRom.alpha(0.5))(knobs) || '';
  // const d = cubicPath(knobs);
  return (
    <>
      <path d={d} {...props} />
      {knobs.map(([x, y], i) => (
        <circle cx={x} cy={y} r="5" fill="red" key={i} />
      ))}
    </>
  );
}
