import styled from "styled-components";
import devices from "../Utils/devices";

import { StyledHeaderButton } from "./StyledHeader";

export const StyledDeviceCard = styled.div`
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
  font-family: "Crimson Text", serif;

  :hover {
    /* opacity: 0.8; */
    transform: scale(1);
    transition: all 0.5s ease;
  }
  /* box-shadow: 0 3px 3px #d3d3d3; */

  .header {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    max-height: 5.5rem;
    font-family: "Crimson Text", serif;

    .header-text {
      margin-left: 1rem;
      font-family: "Crimson Text", serif;

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
    .buy-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .header-image {
      width: 90%;
      height: 90%;
      display: flex;
      justify-content: flex-start;
      /* align-items: center; */
    }
  }

  .bullet-points p {
    margin: 0;
    font-family: "Crimson Text", serif;
  }

  .description p {
    margin: 0;
    font-family: "Crimson Text", serif;
  }
`;

export const StyledButton = styled(StyledHeaderButton)`
  padding: 0.6em;
  width: 90px;
  font-family: "Crimson Text", serif;
  font-size: 0.85rem;
`;
