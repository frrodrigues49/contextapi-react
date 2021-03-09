import React from "react";
import { useCount } from "../../context/CountProvider";

function Mirror() {
  const { count } = useCount();
  return (
    <div>
      <span>
        <b>Mirror:</b> {count}
      </span>
    </div>
  );
}

export default Mirror;
