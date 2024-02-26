import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);
  const addvalue = () => {
    if (counter < 30) setcounter(counter + 1);
    console.log("value added", counter);
  };

  const subvalue = () => {
    if (counter > 0) setcounter(counter - 1);
  };
  return (
    <>
      <h1>chai and react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={subvalue}>remove value</button>
    </>
  );
}

export default App;
