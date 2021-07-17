import React from 'react';
import styled from 'styled-components';

const MobileMenuStyles = styled.div`
  padding: 8rem 0 4rem 0;
  width: 100%;

  background-color: var(--white);
  z-index: 10000;
  clip-path: polygon(93% 7%, 100% 0, 100% 0, 100% 100%, 0 100%, 0 7%);
  .nav-btn {
    display: block;
    background: var(--yellow);
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    color: black;
    padding: 1.8rem 3rem;
    border: none;
    border-radius: 4rem;
    transition: all 0.25s;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li:not(:last-child) {
      margin-bottom: 3rem;
    }
    li a {
      font-size: 20px;
      color: var(--dark-grayish-blue);
    }
  }
`;

export default function MobileMenu() {
  return (
    <MobileMenuStyles>
      <ul className="font-b">
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a className="nav-btn font-f" href="/contact">
            Contact
          </a>
        </li>
      </ul>
    </MobileMenuStyles>
  );
}
