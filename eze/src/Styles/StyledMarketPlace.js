import styled from "styled-components";
import devices from "../Utils/devices";

export const StyledMarketplace = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-content:center;
width: 100%;
margin-top: 5rem;

.categories {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 16rem;
  height: 30rem;
  padding-right: 1.5rem;
  margin-left: 1.5rem;
  margin-right: 0.5rem;
  color: white;
  text-align: center;
  background: #1e242f;
  margin-top: 0.5rem;
  /* position: fixed; */
  /* z-index: */
  /* background .keyword {
    margin-top: 1rem;
  } */

  /* @media ${devices.mobile} {
    flex-direction: column;
    align-items: center;
  } */
}

.devices {
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: space-between;
  color: white;
  margin-right: 1.5rem;
  /* position: relative; */

}
`;
