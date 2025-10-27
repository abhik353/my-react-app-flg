import React, { useCallback } from "react";
import Wrapper from "./Wrapper";

const Counter2 = ({ count, increase, mode }) => {

  return (
    <div>
      <h3>Counter 2</h3>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase {mode}</button>
    </div>
  );
};

export default Wrapper(Counter2, "direct");