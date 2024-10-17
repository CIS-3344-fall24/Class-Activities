import "./App.css";
import { useState, createContext } from "react";
import { Navbar } from "./Components/Lecture16/Navbar/Navbar";

export const CounterContext = createContext();
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Navbar count={count} /> */}

      <CounterContext.Provider value={count}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Navbar count={count} />
      </CounterContext.Provider>
    </>
  );
}

export default App;
