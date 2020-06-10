import React from "react";
import DeviceCard from "./DeviceCard";
import Sidebar from "./Sidebar";
import device_images from "./imageArray";
import { StyledMarketplace } from "../Styles/StyledMarketPlace";

console.log(device_images);

function Devices(props) {
  const { devices, searchPriceCallback } = props;
  console.log(devices);

  return (
    <StyledMarketplace>
      <Sidebar searchPrice={searchPriceCallback} />
      <div className="devices">
        {devices?.map((device) => (
          <DeviceCard
            //  key={device.id}
            name={device.name}
            price={device.price}
            condition={device.condition}
            images={device_images}
          />
        ))}
      </div>
    </StyledMarketplace>
  );
}

export default Devices;
