import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Curve } from '../.';

const knobs: [number, number][] = [
  [5, 50],
  [50, 80],
  [100, 60],
  [150, 10],
  [195, 20],
];

const App = () => {
  return (
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
      <Curve knobs={knobs} fill="transparent" stroke="black" />
    </svg>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
