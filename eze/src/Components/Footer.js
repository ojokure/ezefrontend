import React from "react";
import { StyledFooterContainer } from "../Styles/StyledFooterContainer";

const Footer = () => (
  <StyledFooterContainer className="footer-container">
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
  </StyledFooterContainer>
);

export default Footer;
