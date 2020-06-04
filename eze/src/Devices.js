import React from "react";
import styled from "styled-components";
import DeviceCard from "./DeviceCard";
import device_images from "./image_array";
import devices from "./utils/devices";

console.log(device_images);

const StyledMarketplace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content:center;
  width: 100%;
  margin-top: 5rem;

  .categories {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 16rem;
    height: 80rem;
    padding-right: 1.5rem;
    margin-left: 1.5rem;
    margin-right: 0.5rem;
    color: white;
    text-align: center;
    background: #1e242f;
    margin-top: 0.5rem;

    /* background .keyword {
      margin-top: 1rem;
    } */

    /* @media ${devices.mobile} {
      flex-direction: column;
      align-items: center;
    } */
  }

  .devices {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    justify-content: space-between;
    color: white;
    margin-right: 1.5rem;

  }
`;

function Devices(props) {
  const { devices } = props;

  return (
    <StyledMarketplace>
      <div className="categories"> Categories </div>
      <div className="devices">
        {devices?.map((device) => (
          <DeviceCard
            //  key={device.id}
            name={device.name}
            condition={device.condition}
            images={device_images}
          />
        ))}
      </div>
    </StyledMarketplace>
  );
}

export default Devices;
