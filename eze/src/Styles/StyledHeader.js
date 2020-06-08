import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledHeader = styled.div`
  background-color: #14161c;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  color: white;
  margin: 0px 5px;
  /* margin: 40px; */

  .header-text {
  }

  .header-img {
    margin-top: 15px;
    margin-left: 30em;
    width: 30%;
  }

  #search {
    padding: 0.8em;
    padding-left: 0px;
    border-radius: 0.3em;
    border: none;
    background: #f9f7ff;
    align-items: center;
    width: 300px;
    color: #6d6d6d;
  }
`;

export const StyledHeaderButton = styled.button`
  padding: 0.8em;
  border-radius: 0.3em;
  margin-left: 10px;
  border: none;
  background: #007ee5;
  color: white;
  align-items: center;
  width: 80px;
`;
