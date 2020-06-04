import React from "react";
import prdctsimg from "./img/appleprdcts.PNG";

function Header() {
  return (
    <div className="App-header">
      <h1>
        SHOP OUR LATEST <br />
        AVAILABLE STOCK HERE
      </h1>

      <img src={prdctsimg} alt="products" className="header-img" />
    </div>
  );
}

export default Header;
