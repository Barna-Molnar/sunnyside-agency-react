import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
  text-align: start;
  height: 600px;
  width: 720px;
  padding: 15rem;
  h2 {
    font-size: 4rem;
    margin-bottom: 4rem;
  }
  p {
    font-size: 15px;
    font-weight: 700;
    font-family: sans-serif;
    color: var(--dark-grayish-blue);
    line-height: 2;
    margin-bottom: 4rem;
  }
  button {
    position: relative;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    font-size: 15px;
    padding: 0 1rem;
    z-index: 1000;
  }
  button::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1rem;
    background-color: yellow;
    border-radius: 5px;
    z-index: -100;
  }
`;

export default function CardNoImg({ title, para, button = 'Learn More' }) {
  return (
    <CardStyles>
      <h2 className="font-f">{title}</h2>
      <p>{para}</p>
      <button className="font-f">{button}</button>
    </CardStyles>
  );
}
