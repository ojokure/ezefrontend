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
              value={price.min}
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
              value={price.max}
            />
          </div>
          <div className="title-bar"> Storage </div>
          <div className="bar-menu"> 32gb </div>
          <div className="bar-menu"> 64gb </div>
          <div className="bar-menu"> 128gb </div>
          <div className="bar-menu"> 256gb </div>
          <div className="title-bar"> Condition </div>
          <div className="bar-menu"> New </div>
          <div className="bar-menu"> A1 </div>
          <div className="bar-menu"> A2 </div>
          <div className="bar-menu"> B1 </div>
          <div className="bar-menu"> B2 </div>
          <div className="bar-menu"> C </div>
          <div className="bar-menu"> C/B </div>
          <div className="bar-menu"> C/D </div>
        </div>
      </StyledSideBar>
    </>
  );
}

export default SideBar;
