import React from "react";
import prdcts from "./img/appleprdcts.PNG";

function Header() {
  return (
    <div className="App-header">
      <h1>
        SHOP OUR LATEST <br />
        AVAILABLE STOCK HERE
      </h1>
      <img src={prdcts} alt="products image" />
    </div>
  );
}

export default Header;
