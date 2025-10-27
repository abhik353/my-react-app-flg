import React, { useCallback } from "react";
import Wrapper from "./Wrapper";

const Counter2 = ({ count, setCount }) => {
  const increase = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <h3>Counter 2</h3>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Wrapper(Counter2);