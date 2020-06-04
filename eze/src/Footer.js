import React from "react";
import styled from "styled-components";
import devices from "./utils/devices";

export const FooterContainer = styled.div`
  width: 100%;
  background: #292d38;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .footer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 0.8rem;
    color: white;

    @media ${devices.tablet} {
      flex-direction: column;
    }

    .footer-content {
      opacity: 0.8;

      @media ${devices.tablet} {
        padding: 0.5rem 0;
        text-align: center;
      }
    }
  }

  .footer-icons {
    width: 10%;
    display: flex;
    justify-content: space-around;
    .fab {
      font-size: 2rem;
    }
  }

  .footer-tribute {
    text-align: center;
  }
`;

const Footer = () => (
  <FooterContainer className="footer-container">
    <div className="footer">
      <div className="footer-content footer-copyright">
        <p> Copyright © 2020 Eze Technologies.</p>
      </div>
      <div className="footer-content footer-icons">
        <div className="footer-icon">
          <i className="fab fa-twitter-square"></i>
        </div>

        <div className="footer-icon">
          <i className="fab fa-facebook"></i>
        </div>

        <div className="footer-icon">
          <i className="fab fa-instagram"></i>
        </div>
      </div>
      <div className="footer-content footer-tribute">
        <p>Designed by Oladimeji Ojo</p>
      </div>
    </div>
  </FooterContainer>
);

export default Footer;
