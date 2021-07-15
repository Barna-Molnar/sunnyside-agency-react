import React from 'react';
import styled from 'styled-components';
import Fb from '../images/icons&photos/icon-facebook.svg';
import Insta from '../images/icons&photos/icon-instagram.svg';
import Twitter from '../images/icons&photos/icon-twitter.svg';
import Pinterest from '../images/icons&photos/icon-pinterest.svg';
import {
  GrFacebook,
  GrInstagram,
  GrPinterest,
  GrTwitter,
} from 'react-icons/gr';

const FooterStyles = styled.div`
  width: 1440px;
  padding: 6rem 25rem 7rem 25rem;
  text-align: center;
  background-color: var(--dark-cyan-footer2);

  h3 {
    font-size: 3.5rem;
    font-weight: 800;
    color: var(--dark-cyan-text);
    opacity: 0.75;
    margin-bottom: 4rem;
  }
  .pagesLinks {
    margin-bottom: 9rem;
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
        font-size: 2rem;
        color: #2c7566;
        transition: all 0.25s;
      }
    }
    a:not(:last-child) {
      margin-right: 3rem;
    }
    svg:hover {
      transform: scale(1.1);
      color: var(--white);
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
          <GrFacebook />
        </a>
        <a href="#">
          <GrInstagram />
        </a>
        <a href="#">
          <GrTwitter />
        </a>
        <a href="#">
          <GrPinterest />
        </a>
      </div>
    </FooterStyles>
  );
}
