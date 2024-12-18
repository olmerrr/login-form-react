import React from "react";

import "../App.css";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

function App() {
  return (
    <div className="app">
      <div className="container">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
