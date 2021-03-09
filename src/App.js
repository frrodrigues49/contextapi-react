import React from "react";
import Counter from "./components/Counter";
import Mirror from "./components/Mirror";

import CountProvider from "./context/CountProvider";

function App() {
  return (
    <CountProvider>
      <div className="App">
        <Counter />
        <hr />
        <Mirror />
      </div>
    </CountProvider>
  );
}

export default App;
