import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledSideBar = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 16rem;
  /* height: auto; */
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
  top: 0;

  .side-bar-menu {
    /* display: flex;
    justify-content: space-evenly;
    flex-direction: column; */
    margin-top: 20px;
    font-family: "Crimson Text", serif;
    padding: 10px;
    /* height: auto; */

    .bar-menu {
      /* margin-top: 10px; */
      font-family: "Crimson Text", serif;
      padding: 10px;

      :hover {
        text-decoration: underline;
      }
    }
  }
  .title-bar {
    margin-top: 10px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
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
