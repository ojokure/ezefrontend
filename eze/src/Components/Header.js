import React, { useState } from "react";
import prdctsimg from "../Img/appleprdcts.PNG";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { StyledHeader, StyledHeaderButton } from "../Styles/StyledHeader";

function Header() {
  // const [ state, setState ] = useState()

  // const search_keyword = (searchterm) => {
  //   ...state,
  //   devices: state.filter(
  //    device =>
  //      device.name
  //         .toLowerCase()
  //         .includes(searchterm.toLowerCase()) ||
  //      device.storage_size
  //         .toLowerCase()
  //         .includes(searchterm.toLowerCase()) ||
  //       (device.condition &&
  //        device.condition
  //           .toLowerCase()
  //           .includes(searchterm.toLowerCase())),
  //   ),
  // };

  // const search

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
          prefix={<SearchOutlined />}
        />
        <StyledHeaderButton> Search </StyledHeaderButton>
      </div>

      <img src={prdctsimg} alt="products" className="header-img" />
    </StyledHeader>
  );
}

export default Header;
