import React from "react";
import { useCount } from "../../context/CountProvider";

function Counter() {
  const { count, setCount } = useCount();
  return (
    <div>
      <span>
        <b>Count:</b> {count}
      </span>

      <br />

      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : "")}>
        Remove
      </button>
    </div>
  );
}

export default Counter;
