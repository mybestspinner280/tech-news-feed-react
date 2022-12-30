import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;

  p {
    margin: 0;
    font-size: 14px;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>Tutti i diritti riservati - Copyright 2021</p>
      <p>Contattaci: info@example.com</p>
    </FooterContainer>
  );
}

export default Footer;
