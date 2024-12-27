import "./App.css";
import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("Shruti");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor="nameInput">Enter your name: </label>
      <input type="text" id="nameInput" onChange={handleNameChange} />

      <p>Hello {name} </p>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Name />
      <Name />
    </div>
  );
}

export default App;
