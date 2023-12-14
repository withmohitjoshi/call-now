import React, { useEffect } from "react";
import Dialpad from "./components/Dialpad";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-[100svh]">
      <div className="max-w-screen-sm shadow-xl rounded-xl px-4 py-6 mx-4">
        <Dialpad />
      </div>
    </div>
  );
};

export default App;
