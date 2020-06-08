import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledLoadMore = styled.button`
  background: #1e242f;
  width: 20%;
  /* min-width: 100px; */
  height: 60px;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-size: 1.5em;
  /* max-width: 1280px; */
  display: block;
  margin: 20px auto;
  /* padding: 0 20px; */
  outline: none;
  border: none;

  :hover {
    opacity: 0.8;
  }
`;
