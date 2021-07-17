import React, { useState } from 'react';
import { GrMenu } from 'react-icons/gr';
import styled from 'styled-components';

const NavmenuStyles = styled.div`
  padding: 5rem 4rem 0 4rem;
  font-size: 15px;
  .container {
    display: flex;
    justify-content: space-between;
  }
  svg {
    display: none;
    color: var(--white);
  }
  ul {
    display: flex;
    align-items: center;
    gap: 3rem;
    li a {
      color: var(--white);
    }
  }
  h3 {
    font-size: 25px;
    font-weight: 700;
    font-family: sans-serif;
    color: var(--white);
  }
  .nav-btn {
    background: var(--white);
    font-size: 18px;
    font-weight: 600;

    color: black;
    padding: 1.2rem 3rem;
    border: none;
    border-radius: 4rem;
    transition: all 0.25s;
  }
  .nav-btn:hover {
    color: var(--white);
    background-color: rgba(255, 255, 255, 0.25);
  }
  @media only screen and (max-width: 1440px) {
    padding: 3rem 0;
    ul {
      display: none;
    }
    .hamburger {
      color: white;
      svg {
        display: block;
        font-size: 3rem;
        fill: white;
      }
    }
  }
`;

export default function NavMenu({ setVisible, visible }) {
  return (
    <NavmenuStyles>
      <div className="container ">
        <h3>sunnyside</h3>
        <div className="hamburger">
          <GrMenu fill="#fff" onClick={() => setVisible(!visible)} />
        </div>
        <ul className="">
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
            <a className="nav-btn " href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </NavmenuStyles>
  );
}
