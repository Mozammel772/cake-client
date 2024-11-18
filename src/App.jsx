import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-5xl font-bold">Welcome to </h1>
      <button className="btn btn-primary">buttonm</button>
    </>
  );
}

export default App;
