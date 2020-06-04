import React from "react";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import devices from "./utils/devices";

const StyledDeviceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 11rem;
  height: 17rem;
  padding: 1rem;
  margin: 0.5rem;
  margin-bottom: 3.5rem;
  color: white;
  text-align: center;
  background: #1e242f;
  /* box-shadow: 0 3px 3px #d3d3d3; */

  .header {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    max-height: 5.5rem;
    .header-text {
      margin-left: 1rem;
      h3 {
        font-weight: bold;
        font-size: 1rem;
        color: white;
        margin: 0;
      }
      p {
        margin: 0;
      }
    }

    .header-image {
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: flex-start;
      /* align-items: center; */
      .picture {
        width: 5rem;
        height: 5rem;
      }
    }
  }

  .bullet-points p {
    margin: 0;
    .location-bullet .location-icon {
      margin-left: 0.1em;
      padding-right: 0.1em;
    }
  }

  .description p {
    margin: 0;
  }
`;

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
        <p className="experience-bullet">{name}</p>
      </div>
      <div className="description">
        {/* <p>{`${coach.description && coach.description.slice(0, 90)}...`}</p> */}
      </div>
      unit price
      <div className="reviews">
        {/* <Rating rating={coach.rating} size="small" /> */}
      </div>
      <Button variant="contained" color="primary" className="">
        Buy
      </Button>
    </StyledDeviceCard>
  );
};

export default DeviceCard;
