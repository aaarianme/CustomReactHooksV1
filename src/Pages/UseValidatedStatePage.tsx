import React from "react";
import useValidatedState from "../Hooks/useValidatedState";

export default function UseValidatedStatePage() {
  const [state, setState, isValid] = useValidatedState<string>(
    "",
    (state: string) => {
      return state.length > 5;
    }
  );
  return (
    <div>
      <p>
        This state is validated. current validated state is{" "}
        {isValid ? "Valid" : "Invalid"}
      </p>
      <input onChange={(e) => setState(e.target.value)} value={state}></input>
    </div>
  );
}
