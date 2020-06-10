import React, { useState } from "react";
import { Input } from "antd";
import { StyledSideBar } from "../Styles/StyledSideBar";

export function SideBar({ searchPrice }) {
  const maxnMin = {
    min: "",
    max: "",
  };

  const [price, setPrice] = useState(maxnMin);

  const handleSearch = (event) => {
    const { value, name } = event.target;

    setPrice({ ...price, [name]: +parseInt(value) });

    searchPrice(price.min, price.max);
    // console.log(price);
  };

  return (
    <>
      <StyledSideBar>
        <div className="title-bar">Categories</div>
        <div className="side-bar-menu">
          <div className="bar-menu"> All </div>
          <div className="bar-menu"> Iphone </div>
          <div className="bar-menu"> Samsung </div>
          <div className="bar-menu"> Ipad </div>
          <div className="bar-menu"> MacBook </div>
          <div className="bar-menu"> Airpods </div>
          <div className="bar-menu"> Price Filter </div>
          <div>
            <Input
              name="min"
              id="search"
              placeholder="Min"
              // prefix={<SearchOutlined />}
              onChange={handleSearch}
              value={price.min}
            />
          </div>
          <div> | </div>
          <div>
            <Input
              name="max"
              id="search"
              placeholder="Max"
              // prefix={<SearchOutlined />}
              // onChange={doSearch}
              // value={searchValue}
              onChange={handleSearch}
              value={price.max}
            />
          </div>
          <div className="bar-menu"> Storage </div>
          <div className="bar-menu"> 32gb </div>
          <div className="bar-menu"> 64gb </div>
          <div className="bar-menu"> 128gb </div>
          <div className="bar-menu"> 256gb </div>
        </div>
      </StyledSideBar>
    </>
  );
}

export default SideBar;
