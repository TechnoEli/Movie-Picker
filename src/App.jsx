import { useState } from "react";

import "./App.css";
import Movies from "./Components/Movies";
import Movie from "./Components/Movie";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Movies />
    </>
  );
}

export default App;
