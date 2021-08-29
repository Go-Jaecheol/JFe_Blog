import React from "react";
import styled from "styled-components";
  
const FooterWrapper = styled.footer`
  place-items: center;
  text-align: center;
  font-size: 20px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            © 2021 | Jfe
        </FooterWrapper>
    );
  };
  
  export default Footer;