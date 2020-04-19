import * as React from 'react';

export type CurveProps = {
  data: [number, number][];
  path: string;
  showPoints?: boolean;
  pointElement?: PointElement;
} & React.SVGProps<SVGPathElement>;

export function Curve({
  path,
  data,
  pointElement = defaultPointElement,
  showPoints = true,
  ...props
}: CurveProps) {
  return (
    <>
      <path d={path} {...props} />
      {showPoints && data.map(pointElement)}
    </>
  );
}

type PointElement = (
  center: [number, number],
  i: number,
  points: [number, number][]
) => React.ReactNode;

function defaultPointElement(
  center: [number, number],
  i: number
): React.ReactNode {
  return (
    <circle
      cx={center[0]}
      cy={center[1]}
      r="4"
      fill="black"
      stroke="black"
      strokeWidth="2"
      key={i}
    />
  );
}
