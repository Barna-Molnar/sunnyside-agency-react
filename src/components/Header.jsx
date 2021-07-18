import React, { useState } from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import HeaderImgDesktop from '../images/desktop/image-header.jpg';
import HeaderImgMobile from '../images/mobile/image-header.jpg';
import ArrowDownIcon from '../images/icons&photos/icon-arrow-down.svg';
import MobileMenu from './MobileMenu';

const HeaderStyles = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;

  background: url(${HeaderImgDesktop}) no-repeat center / cover;
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
    margin-bottom: 35rem;
  }
  @media only screen and (max-width: 1440px) {
    padding: 0 2rem;
    width: 375px;
    background: url(${HeaderImgMobile}) no-repeat center / cover;
    z-index: 0;
    h1 {
      font-size: 4rem;
      margin-top: 6rem;
      z-index: 0;
    }
    img {
      margin-top: 6rem;
      margin-bottom: 14rem;
    }
  }
`;

export default function Header() {
  const [visible, setVisible] = useState(false);
  return (
    <HeaderStyles>
      <NavMenu setVisible={setVisible} visible={visible} />
      <MobileMenu visible={visible} />
      <h1 className="font-f">We are Creatives</h1>
      <img src={ArrowDownIcon} alt="" />
    </HeaderStyles>
  );
}
