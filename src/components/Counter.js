import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(`before setState: ${count}`);
    setCount((currentCount) => currentCount + 1);
    console.log(`after setState once: ${count}`);
    setCount((currentCount) => currentCount + 1);
  }

  return <button onClick={increment}>{count}</button>;
}

export default Counter;
