import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledLoadMore = styled.button`
  background: #1e242f;
  width: 15%;
  min-width: 80px;
  height: 60px;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-size: 1em;
  display: block;
  margin: 20px auto;
  margin-bottom: 60px;
  padding: 0 20px;
  outline: none;
  border: none;
  box-shadow: 0px 1px 2px #d3d3d3;

  @media ${devices.tablet} {
    margin-bottom: 100px;
  }

  :hover {
    opacity: 0.5;
  }
`;
