import React from "react";
import { StyledDeviceCard, StyledButton } from "../Styles/StyledDeviceCard";

export const DeviceCard = (props) => {
  const { name, images, condition } = props;

  return (
    <StyledDeviceCard className="device-card">
      <div className="header">
        <div className="header-text">
          <h3>{condition}</h3>
        </div>
        <div>
          <img className="header-image" src={images[16]} />
        </div>
      </div>
      <div className="bullet-points">
        <p className="location-bullet">{/* {coach.location */}</p>
      </div>
      <div className="description">
        {/* <p>{`${coach.description && coach.description.slice(0, 90)}...`}</p> */}
      </div>
      unit price
      <StyledButton className="buy-button"> Buy </StyledButton>
    </StyledDeviceCard>
  );
};

export default DeviceCard;
