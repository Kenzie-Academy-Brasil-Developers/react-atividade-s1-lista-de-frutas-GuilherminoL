import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import FruitsList from "./components/fruitsList";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    setFruits(fruits.filter((item) => item.color === "red"));
  };

  return (
    <div className="App">
      <FruitsList props={fruits} />
      <button className="buttonFilter" onClick={filterRedFruits}>
        Mostrar frutas vermelhas
      </button>
    </div>
  );
}

export default App;
