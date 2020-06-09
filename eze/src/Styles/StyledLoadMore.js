import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledLoadMore = styled.button`
  background: #1e242f;
  width: 15%;
  min-width: 60px;
  height: 60px;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-size: 1em;
  /* max-width: 1280px; */
  display: block;
  margin: 20px auto;
  margin-bottom: 60px;
  padding: 0 20px;
  outline: none;
  border: none;

  :hover {
    opacity: 0.8;
  }
`;
