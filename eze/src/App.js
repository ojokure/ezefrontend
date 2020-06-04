import React from "react";
import "./App.css";
import Header from "./Header";
import Devices from "./Devices";
import Footer from "./Footer";

const phones = [
  { name: "one", condition: "A1" },
  { name: "two", condition: "C" },
  { name: "three", condition: "A1" },
  { name: "four", condition: "A2" },
  { name: "five", condition: "A1" },
  { name: "six", condition: "A1" },
  { name: "seven", condition: "B1" },
  { name: "eight", condition: "B2" },
  { name: "nine", condition: "C/D" },
  { name: "ten", condition: "A1" },
  { name: "eleven", condition: "A1" },
  { name: "twelve", condition: "C" },
  { name: "thirteen", condition: "B1" },
  { name: "fourteen", condition: "A1" },
  { name: "fifteen", condition: "B2" },
  { name: "sixteen", condition: "C" },
  { name: "seventeen", condition: "C/B" },
  { name: "eighteen", condition: "C/D" },
  { name: "nineteen", condition: "A1" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Devices devices={phones} />
      <Footer />
    </div>
  );
}

export default App;
