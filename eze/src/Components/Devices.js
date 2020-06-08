import React from "react";
import DeviceCard from "./DeviceCard";
import Sidebar from "./Sidebar";
import device_images from "./image_array";
import { StyledMarketplace } from "../Styles/StyledMarketPlace";

console.log(device_images);

function Devices(props) {
  const { devices } = props;

  return (
    <StyledMarketplace>
      {/* <div className="categories"> Categories </div> */}
      <Sidebar />
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
