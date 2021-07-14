import React from 'react';
import styled from 'styled-components';
import Fb from '../images/icons&photos/icon-facebook.svg';
import Insta from '../images/icons&photos/icon-instagram.svg';
import Twitter from '../images/icons&photos/icon-twitter.svg';
import Pinterest from '../images/icons&photos/icon-pinterest.svg';

const FooterStyles = styled.div`
  width: 1440px;
  padding: 5rem 25rem;
  text-align: center;
  background-color: var(--dark-cyan-footer2);

  h3 {
    font-size: 4rem;
    font-weight: 800;
    color: var(--dark-cyan-text);
    opacity: 0.75;
    margin-bottom: 5rem;
  }
  .pagesLinks {
    margin-bottom: 10rem;
    a {
      font-size: 18px;
      font-weight: 600;
      color: var(--dark-cyan-footer);
      opacity: 0.9;
      transition: 0.2s all;
    }

    a:not(:last-child) {
      margin-right: 5rem;
    }
    a:hover {
      color: var(--white);
    }
  }
  .social-icons {
    a {
      svg {
        fill: whitesmoke;
      }
    }
    a:not(:last-child) {
      margin-right: 3rem;
    }
    img:hover {
      transform: scale(1.2);
    }
    img {
      background-color: red;
      fill: whitesmoke;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <h3 className="font-b">sunnyside</h3>
      <div className="pagesLinks font-b">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </div>
      <div className="social-icons">
        <a href="#">
          <img src={Fb} alt="" />
        </a>
        <a href="#">
          <img src={Insta} alt="" />
        </a>
        <a href="#">
          <img src={Twitter} alt="" />
        </a>
        <a href="#"></a>
      </div>
    </FooterStyles>
  );
}
