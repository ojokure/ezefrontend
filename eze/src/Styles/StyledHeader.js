import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledHeader = styled.div`
  background-color: #14161c;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  color: white;
  padding-bottom: 100px;
  margin: 0px 16px;

  @media ${devices.tablet} {
    flex-direction: column;
  }

  .header-text {
  }

  .header-img {
    margin-top: 15px;
    width: 30%;
    @media ${devices.tablet} {
      display: none;
    }
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
