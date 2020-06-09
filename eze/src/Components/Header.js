import React, { useState, useRef } from "react";
import prdctsimg from "../Img/appleprdcts.PNG";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { StyledHeader, StyledHeaderButton } from "../Styles/StyledHeader";

function Header({ searchDevicesCallback }) {
  const [searchValue, setSearchValue] = useState("");

  const timeOut = useRef(null);

  const handleSearch = (event) => {
    const { value } = event.target;

    clearTimeout(timeOut.current);
    // console.log(value);
    setSearchValue(value);
    console.log(event.target.value);

    timeOut.current = setTimeout(() => {
      searchDevicesCallback(searchValue);
      console.log(searchValue);
    }, 500);
  };

  return (
    <StyledHeader>
      <div>
        <h1>
          SHOP OUR LATEST <br />
          AVAILABLE STOCK HERE
        </h1>
        <Input
          id="search"
          placeholder="Search by name, condition, storage size"
          // prefix={<SearchOutlined />}
          onChange={handleSearch}
          value={searchValue}
        />
        <StyledHeaderButton> Search </StyledHeaderButton>
      </div>

      <img src={prdctsimg} alt="products" className="header-img" />
    </StyledHeader>
  );
}

export default Header;
