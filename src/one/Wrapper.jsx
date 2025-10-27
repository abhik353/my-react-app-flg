import React, { useState } from "react";

export default function Wrapper(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    return <WrappedComponent count={count} setCount={setCount} {...props} />;
  };
}