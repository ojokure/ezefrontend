import React from "react";
import { StyledDeviceCard, StyledButton } from "../Styles/StyledDeviceCard";

export const DeviceCard = (props) => {
  const { name, images, condition, price, storage } = props;

  return (
    <StyledDeviceCard className="device-card">
      <div className="condition">{condition} </div>
      <div className="mid-sec">
        <img className="card-img" src={images[16]} alt="device" />
        <div className="name"> {name} </div>
        <p> Unlocked | {storage} </p>
        <div className="unit-price"> unit price </div>
        <h3>${price}</h3>
      </div>
      <StyledButton className="buy-button">Buy</StyledButton>
    </StyledDeviceCard>
  );
};

export default DeviceCard;
