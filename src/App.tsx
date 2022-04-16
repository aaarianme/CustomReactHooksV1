import React from "react";
import "./App.css";
import UseTimeoutPage from "./Pages/UseTimeoutPage";
import UseDebouncePage from "./Pages/UseDebouncePage";
import UseUpdateEffectPage from "./Pages/UseUpdateEffectPage";
import UseValidatedStatePage from "./Pages/UseValidatedStatePage";

function App() {
  return (
    <div>
      {
        //<UseTimeoutPage></UseTimeoutPage>
        //<UseDebouncePage></UseDebouncePage>
        //<UseUpdateEffectPage></UseUpdateEffectPage>
        <UseValidatedStatePage></UseValidatedStatePage>
      }
    </div>
  );
}

export default App;
