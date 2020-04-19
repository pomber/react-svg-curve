import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CatmullRomCurve, Line, BasisCurve } from '../.';

const data: [number, number][] = [
  [5, 50],
  [50, 80],
  [100, 60],
  [150, 10],
  [195, 20],
];

const App = () => {
  return (
    <>
      <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <Line data={data} fill="transparent" stroke="black" />
      </svg>
      <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <CatmullRomCurve
          data={data}
          fill="transparent"
          stroke="black"
          alpha={0.1}
          pointElement={([x, y], i) => (
            <rect
              x={x - 2}
              y={y - 2}
              width="4"
              height="4"
              stroke="black"
              fill="transparent"
              stroke-width="4"
              key={i}
            />
          )}
        />
      </svg>
      <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
        <BasisCurve data={data} fill="transparent" stroke="black" />
      </svg>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
