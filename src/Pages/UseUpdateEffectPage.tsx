import React, { useEffect, useState } from "react";
import useUpdateEffect from "../Hooks/useUpdateEffect";

export default function UseUpdateEffectPage() {
  const [state, setState] = useState(10);
  useUpdateEffect(() => {
    window.alert(state);
  }, [state]);
  return (
    <div>
      {state}
      <button onClick={() => setState((p) => p + 10)}>Increment by 10</button>
    </div>
  );
}
