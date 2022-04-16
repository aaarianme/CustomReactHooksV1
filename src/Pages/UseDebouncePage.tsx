import React, { useState } from "react";
import useDebounce from "../Hooks/useDebounce";
export default function UseDebounce() {
  const [state, setState] = useState("");
  const [state2, setState2] = useState(2000);

  useDebounce(
    () => {
      window.alert("hit");
    },
    state2,
    [state]
  );
  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      ></input>
      <input
        type="text"
        value={state2}
        onChange={(e) => setState2(parseInt(e.target.value))}
      ></input>
      <button onClick={() => setState2(0)}>cancel debounce</button>
    </div>
  );
}
