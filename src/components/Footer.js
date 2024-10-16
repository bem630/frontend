import React from 'react'
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Sociétés Electronorme de Guinée. Tous droits réservés.</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  text-align: center;
  padding: 20px;
  position: absolute;
  width: 100%;
  bottom: 0;
`;