import { useState } from "react";
import "./App.css";
import FlipCardComponent from "./components/FlipCardComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FlipCardComponent />
    </>
  );
}

export default App;
