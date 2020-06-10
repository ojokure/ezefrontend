import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledSideBar = styled.div`
  width: 16rem;
  height: auto;
  padding-right: 1.5rem;
  margin-left: 2rem;
  margin-right: 0.5rem;
  color: white;
  text-align: center;
  background: #1e242f;
  margin-top: 0.5rem;
  font-family: "Crimson Text", serif;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  box-shadow: 0px 1px 2px #d3d3d3;

  .side-bar-menu {
    font-family: "Crimson Text", serif;
    padding: 10px;

    .bar-menu {
      font-family: "Crimson Text", serif;
      padding: 10px;

      :hover {
        text-decoration: underline;
      }
    }
  }
  .title-bar {
    margin-top: 10px;

    font-family: "Crimson Text", serif;
  }

  #search {
    padding: 0.65em;
    border-radius: 0.3em;
    border: none;
    background: #f9f7ff;
    align-items: center;
    width: 100px;
    color: #6d6d6d;
  }
`;
