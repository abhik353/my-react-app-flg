import React, { useState, useCallback } from "react";

export default function Wrapper(WrappedComponent,mode = "functional") {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);
    const increaseFunctional = useCallback(() => setCount(d => d + 1), []);
    const increaseDirect = useCallback(() => setCount(count + 1), [count]);
    const increase = mode === "functional" ? increaseFunctional : increaseDirect;

    return <WrappedComponent count={count} increase={increase} mode={mode} {...props} />;
  };
}