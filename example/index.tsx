import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import {
  Line,
  BasisCurve,
  BasisClosedCurve,
  BasisOpenCurve,
  BundleCurve,
  CardinalCurve,
  CardinalClosedCurve,
  CardinalOpenCurve,
  CatmullRomCurve,
  CatmullRomClosedCurve,
  CatmullRomOpenCurve,
  ClosedLine,
  MonotoneXCurve,
  MonotoneYCurve,
  NaturalCurve,
  StepCurve,
  StepAfterCurve,
  StepBeforeCurve,
} from '../.';

const data: [number, number][] = [
  [25, 50],
  [50, 75],
  [75, 80],
  [100, 40],
  [125, 30],
  [150, 60],
  [175, 50],
];

const App = () => {
  const [catmullRomAlpha, setCatmullRomAlpha] = React.useState(0.5);
  const [bundleBeta, setBundleBeta] = React.useState(0.85);
  const [cardinalTension, setCardinalTension] = React.useState(0);
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
            <code children="<BasisOpenCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <BasisOpenCurve data={data} />
          </svg>
        </div>

        <div>
          <h3>
            <code children="<BundleCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <BundleCurve data={data} beta={bundleBeta} />
          </svg>
          <Range
            label="beta"
            max={1}
            value={bundleBeta}
            setValue={setBundleBeta}
          />
        </div>

        <div>
          <h3>
            <code children="<CardinalCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CardinalCurve data={data} tension={cardinalTension} />
          </svg>
          <Range
            label="tension"
            max={1}
            value={cardinalTension}
            setValue={setCardinalTension}
          />
        </div>

        <div>
          <h3>
            <code children="<CardinalClosedCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CardinalClosedCurve data={data} tension={cardinalTension} />
          </svg>
          <Range
            label="tension"
            max={1}
            value={cardinalTension}
            setValue={setCardinalTension}
          />
        </div>

        <div>
          <h3>
            <code children="<CardinalOpenCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CardinalOpenCurve data={data} tension={cardinalTension} />
          </svg>
          <Range
            label="tension"
            max={1}
            value={cardinalTension}
            setValue={setCardinalTension}
          />
        </div>

        <div>
          <h3>
            <code children="<CatmullRomCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CatmullRomCurve data={data} alpha={catmullRomAlpha} />
          </svg>
          <Range
            label="alpha"
            max={5}
            value={catmullRomAlpha}
            setValue={setCatmullRomAlpha}
          />
        </div>

        <div>
          <h3>
            <code children="<CatmullRomClosedCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CatmullRomClosedCurve data={data} alpha={catmullRomAlpha} />
          </svg>
          <Range
            label="alpha"
            max={5}
            value={catmullRomAlpha}
            setValue={setCatmullRomAlpha}
          />
        </div>

        <div>
          <h3>
            <code children="<CatmullRomOpenCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <CatmullRomOpenCurve data={data} alpha={catmullRomAlpha} />
          </svg>
          <Range
            label="alpha"
            max={5}
            value={catmullRomAlpha}
            setValue={setCatmullRomAlpha}
          />
        </div>

        <div>
          <h3>
            <code children="<ClosedLine />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <ClosedLine data={data} />
          </svg>
        </div>

        <div>
          <h3>
            <code children="<MonotoneXCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <MonotoneXCurve data={data} />
          </svg>
        </div>

        <div>
          <h3>
            <code children="<MonotoneYCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <MonotoneYCurve data={data} />
          </svg>
        </div>

        <div>
          <h3>
            <code children="<NaturalCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <NaturalCurve data={data} />
          </svg>
        </div>

        <div>
          <h3>
            <code children="<StepCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <StepCurve data={data} />
          </svg>
        </div>

        <div>
          <h3>
            <code children="<StepAfterCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <StepAfterCurve data={data} />
          </svg>
        </div>

        <div>
          <h3>
            <code children="<StepBeforeCurve />" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <StepBeforeCurve data={data} />
          </svg>
        </div>
      </div>

      <h2>Custom Point Element</h2>
      <div className="grid">
        <div>
          <h3>
            <code children="showPoints={false}" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <NaturalCurve data={data} showPoints={false} />
          </svg>
        </div>

        <div>
          <h3>
            <code children="pointElement={fn}" />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <NaturalCurve
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
            <NaturalCurve
              data={data}
              pointElement={([x, y], i) => (
                <text
                  x={x}
                  y={y}
                  key={i}
                  alignmentBaseline="middle"
                  textAnchor="middle"
                  fill="red"
                  fontSize={24}
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
            <NaturalCurve data={data} showPoints={false} strokeWidth={10} />
          </svg>
        </div>

        <div>
          <h3>
            <code children={`stroke="blue"`} />
          </h3>
          <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
            <NaturalCurve
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
            <NaturalCurve
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

function Range({ min = 0, max = 1, step = 0.01, value, setValue, label }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <label>{label}: </label>
      <div style={{ width: 50 }}>{value}</div>
      <input
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={e => setValue(+e.target.value)}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
