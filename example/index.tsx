import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { CatmullRomCurve, Line, BasisCurve, BasisClosedCurve } from '../.';

const data: [number, number][] = [
  [5, 50],
  [50, 80],
  [100, 60],
  [150, 10],
  [195, 20],
];

const App = () => {
  const [catmullRomAlpha, setCatmullRomAlpha] = React.useState(0.5);
  return (
    <>
      <h1>react-svg-curve</h1>
      <div className="grid">
        <div>
          <h3>
            <code children="<Line />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <Line data={data} />
          </svg>
        </div>
        <div>
          <h3>
            <code children="<BasisCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <BasisCurve data={data} />
          </svg>
        </div>
        <div>
          <h3>
            <code children="<BasisClosedCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <BasisClosedCurve data={data} />
          </svg>
        </div>
        <div>
          <h3>
            <code children="<CatmullRomCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CatmullRomCurve data={data} alpha={catmullRomAlpha} />
          </svg>
          <div>
            <label>alpha: </label>
            <input
              style={{ width: 100 }}
              type="range"
              step={0.01}
              max={5}
              value={catmullRomAlpha}
              onChange={e => setCatmullRomAlpha(+e.target.value)}
            />
            {catmullRomAlpha}
          </div>
        </div>
      </div>
      <h2>Custom Point Element</h2>
      <div className="grid">
        <div>
          <h3>
            <code children="showPoints={false}" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CatmullRomCurve data={data} showPoints={false} />
          </svg>
        </div>
        <div>
          <h3>
            <code children="pointElement={fn}" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CatmullRomCurve
              data={data}
              pointElement={([x, y], i) => (
                <rect
                  x={x - 2}
                  y={y - 2}
                  width="4"
                  height="4"
                  stroke="black"
                  fill="transparent"
                  strokeWidth="4"
                  key={i}
                />
              )}
            />
          </svg>
        </div>
        <div>
          <h3>
            <code children="pointElement={fn}" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CatmullRomCurve
              data={data}
              pointElement={([x, y], i) => (
                <text
                  x={x}
                  y={y}
                  key={i}
                  alignmentBaseline="middle"
                  textAnchor="middle"
                  fill="red"
                >
                  {i}
                </text>
              )}
            />
          </svg>
        </div>
      </div>

      <h2>Custom Path Style</h2>
      <div className="grid">
        <div>
          <h3>
            <code children="strokeWidth={10}" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CatmullRomCurve data={data} showPoints={false} strokeWidth={10} />
          </svg>
        </div>
        <div>
          <h3>
            <code children={`stroke="blue"`} />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CatmullRomCurve
              data={data}
              showPoints={false}
              strokeWidth={10}
              stroke="blue"
            />
          </svg>
        </div>
        <div>
          <h3>
            <code children={`strokeDasharray="6"`} />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CatmullRomCurve
              data={data}
              showPoints={false}
              strokeWidth={10}
              strokeDasharray="6"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

function Range({ min = 0, max = 1, step = 0.1, value, setValue }) {}

ReactDOM.render(<App />, document.getElementById('root'));
