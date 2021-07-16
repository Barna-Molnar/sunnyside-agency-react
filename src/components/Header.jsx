import React from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import HeaderImg from '../images/desktop/image-header.jpg';
import ArrowDownIcon from '../images/icons&photos/icon-arrow-down.svg';

const HeaderStyles = styled.div`
  width: 100%;
  height: 800px;
  background: url(${HeaderImg}) no-repeat center / cover;
  text-align: center;
  h1 {
    text-transform: uppercase;
    color: var(--white);
    font-size: 5rem;
    margin-top: 12rem;
    letter-spacing: 1rem;
  }

  img {
    height: 10rem;
    margin-top: 12rem;
  }
  @media only screen and (max-width: 1440px) {
    width: 375px;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <NavMenu />
      <h1 className="font-f">We are Creatives</h1>
      <img src={ArrowDownIcon} alt="" />
    </HeaderStyles>
  );
}
