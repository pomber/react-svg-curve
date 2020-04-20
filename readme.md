# react-svg-curve

React components to draw different types of curves with `svg`. It wraps all the curve paths from [d3-shape](https://github.com/d3/d3-shape/blob/master/README.md#curves).

Install

```bash
npm install react-svg-curve
```

Use

```jsx
import { BasisCurve } from 'react-svg-curve';

function App() {
  return (
    <svg width="100" height="40">
      <BasisCurve
        data={[
          [0, 10],
          [50, 35],
          [100, 0],
        ]}
      />
    </svg>
  );
}
```

`BasisCurve` is one of many types of curves available. Go to [the **demo** on codesandbox](https://codesandbox.io/embed/react-svg-curve-71nnp?fontsize=14&hidenavigation=1&theme=dark&view=preview) to see all the curves and options.
