import React, { useState } from "react";
import { Input } from "antd";
import { StyledSideBar } from "../Styles/StyledSideBar";

export function SideBar({ searchPrice }) {
  const prices = {
    min: 0,
    max: 10000,
  };

  const [price, setPrice] = useState(prices);

  const handleSearch = (event) => {
    const { value, name } = event.target;

    setPrice({ [name]: value });

    searchPrice(price.min, price.max);
  };

  return (
    <>
      <StyledSideBar>
        <div className="title-bar">Categories</div>
        <div className="side-bar-menu">
          <div className="all"> All </div>
          <div className="bar-menu"> Iphone </div>
          <div className="bar-menu"> Samsung </div>
          <div className="bar-menu"> Ipad </div>
          <div className="bar-menu"> MacBook </div>
          <div className="bar-menu"> Airpods </div>
          <div className="title-bar"> Price Filter </div>
          <div>
            <Input
              name="min"
              id="search"
              placeholder="Min"
              onChange={handleSearch}
              defaultValue={price.min}
            />
          </div>
          <div> | </div>
          <div>
            <Input
              name="max"
              id="search"
              placeholder="Max"
              // value={searchValue}
              onChange={handleSearch}
              defaultValue={price.max}
            />
          </div>
          <div className="title-bar"> Storage </div>
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
