import React, { useCallback } from "react";
import Wrapper from "./Wrapper";

const Counter1 = ({ count, increase, mode }) => {

  return (
    <div>
      <h3>Counter 1</h3>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase {mode}</button>
    </div>
  );
};

export default Wrapper(Counter1, "functional");