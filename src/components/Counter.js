import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log('before set state - ', count)
    setCount(count + 1);
    console.log('after set state - ', count)
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
