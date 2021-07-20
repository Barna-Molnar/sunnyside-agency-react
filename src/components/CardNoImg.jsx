import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
  text-align: start;
  max-height: 600px;
  max-width: 720px;
  min-width: 375px;
  padding: 15rem;

  h2 {
    font-size: 4rem;
    margin-bottom: 4rem;
  }
  p {
    font-size: 16px;
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
    bottom: -2px;
    left: 0;
    right: 0;
    height: 1rem;
    background-color: ${(props) =>
      props.underLineColor === 'yellow' ? 'var(--yellow)' : 'var(--soft-red)'};
    border-radius: 5px;
    z-index: -100;
  }
  @media only screen and (max-width: 1438px) {
    margin: 0;
    width: 375px;
    text-align: center;
    padding: 7rem 3rem;

    h2 {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
    p {
      margin-bottom: 3rem;
    }
  }
`;

export default function CardNoImg({
  title,
  para,
  button = 'Learn More',
  underLineColor,
}) {
  return (
    <CardStyles underLineColor={underLineColor}>
      <h2 className="font-f">{title}</h2>
      <p>{para}</p>
      <button className="font-f">{button}</button>
    </CardStyles>
  );
}
