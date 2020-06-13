import React, { useState } from "react";
import appleprdcts2 from "../Img/appleprdcts2.png";
import { Input } from "antd";
import { StyledHeader, StyledHeaderButton } from "../Styles/StyledHeader";

function Header({ searchDevicesCallback }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);

    searchDevicesCallback(searchValue);
  };

  return (
    <StyledHeader>
      <div className="header-text">
        <h1>
          SHOP OUR LATEST <br />
          AVAILABLE STOCK HERE
        </h1>

        <Input
          name="searchValue"
          id="search"
          placeholder="Search by name, condition, storage size"
          onChange={handleSearch}
          value={searchValue}
          style={{ paddingLeft: "40px" }}
        />
        <StyledHeaderButton> Search </StyledHeaderButton>
      </div>

      <img src={appleprdcts2} alt="products" className="header-img" />
    </StyledHeader>
  );
}

export default Header;
