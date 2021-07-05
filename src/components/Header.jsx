import React from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import HeaderImg from '../images/desktop/image-header.jpg';

const HeaderStyles = styled.div`
  width: 100%;
  height: 800px;
  background: url(${HeaderImg}) no-repeat center / cover;
`;

export default function Header() {
  return (
    <HeaderStyles>
      <NavMenu />
    </HeaderStyles>
  );
}
