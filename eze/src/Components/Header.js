import React, { useState, useRef, useEffect } from "react";
import prdctsimg from "../Img/appleprdcts2.png";
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

  // useEffect(() => {
  //   searchDevicesCallback(searchValue);
  // }, [searchValue]);

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
          // prefix={<SearchOutlined />}
          onChange={handleSearch}
          value={searchValue}
          style={{ paddingLeft: "40px" }}
        />
        <StyledHeaderButton> Search </StyledHeaderButton>
      </div>

      <img src={prdctsimg} alt="products" className="header-img" />
    </StyledHeader>
  );
}

export default Header;
