import React, { useCallback } from "react";
import Wrapper from "./Wrapper";

const Counter1 = ({ count, setCount }) => {
  const increase = useCallback(() => setCount(d => d + 1), []);

  return (
    <div>
      <h3>Counter 1</h3>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};

export default Wrapper(Counter1);