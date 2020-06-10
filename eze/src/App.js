import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Devices from "./Components/Devices";
import Footer from "./Components/Footer";
import LoadMore from "./Components/LoadMore";
import Spinner from "./Components/Spinner";
// Custom Hook
// import { useStateFetch } from "./Hooks/useStateFetch";

// const phones = [];

const phones = [
  { name: "one", condition: "A1", price: 100 },
  { name: "two", condition: "C", price: 1000 },
  { name: "three", condition: "A1", price: 1002 },
  { name: "four", condition: "A2", price: 1004 },
  { name: "five", condition: "A1", price: 10 },
  { name: "six", condition: "A1", price: 150 },
  // { name: "seven", condition: "B1" },
  // { name: "eight", condition: "B2" },
  { name: "seventeen", condition: "C/B", price: 100 },
  { name: "eighteen", condition: "C/D", price: 1200 },
  { name: "nine", condition: "C/D", price: 1400 },
  { name: "ten", condition: "A1", price: 1050 },
  { name: "eleven", condition: "A1", price: 1100 },
  { name: "twelve", condition: "C", price: 1000 },
  { name: "thirteen", condition: "B1", price: 1020 },
  { name: "fourteen", condition: "A1", price: 1240 },
  { name: "fifteen", condition: "B2", price: 1090 },
  { name: "sixteen", condition: "C", price: 500 },
  { name: "seventeen", condition: "C/B" },
  { name: "eighteen", condition: "C/D" },
  { name: "nineteen", condition: "A1" },
];

function App() {
  const [state, setState] = useState(phones);

  const searchByMinMaxPrice = (min, max = 500000) => {
    setState((prev) =>
      prev.filter(
        (devices) =>
          devices.price >= parseInt(min) && devices.price <= parseInt(max)
      )
    );
    console.log(min, max);
  };

  const searchDevicesByKeyword = (search) => {
    if (search) {
      setState((prev) =>
        prev.filter(
          (devices) =>
            (devices.name &&
              devices.name
                .toLowerCase()
                .includes(search && search.toLowerCase())) ||
            (devices.condition &&
              devices.condition
                .toLowerCase()
                .includes(search && search.toLowerCase()))
          //     ||
          // (devices.storage &&
          //   devices.storage
          //     .toLowerCase()
          //     .includes(search && search.toLowerCase()))
        )
      );
    }
  };

  // if (error) return <div>Something went wrong ...</div>;
  if (!phones[0])
    return (
      <div className="App">
        <Header />
        <Spinner />;
        <Footer />
      </div>
    );

  return (
    <div className="App">
      <Header searchDevicesCallback={searchDevicesByKeyword} />
      <Devices devices={state} searchPriceCallback={searchByMinMaxPrice} />
      <LoadMore />
      <Footer />
    </div>
  );
}

export default App;
