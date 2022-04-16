import React, { useEffect, useState } from "react";
import useTimeout from "../Hooks/useTimeout";
export default function UseTimeoutPage() {
  const [state, setState] = useState(0);
  const { clear, reset, ticked, forceFire } = useTimeout(() => {
    setState((preval) => preval + 1);
  }, 3000);

  return (
    <div>
      <p>{state}</p>
      <p>{ticked ? "yes" : "no"}</p>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
      <button onClick={forceFire}>Fire</button>
    </div>
  );
}
