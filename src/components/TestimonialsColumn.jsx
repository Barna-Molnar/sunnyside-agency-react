import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const TestimonialsColumnStyles = styled.div`
  padding: 7rem 3rem 1rem 3rem;

  img {
    height: 70px;
    border-radius: 100%;
    margin-bottom: 6rem;
  }
  p {
    font-size: 18px;
    line-height: 3rem;
    color: var(--very-dark-grayish-blue);
    margin-bottom: 5rem;
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 5px;
  }
  .title-para {
    font-size: 15px;
    color: var(--grayish-blue);
  }
  @media only screen and (max-width: 1400px) {
    padding: 0rem;
    width: 100%;
    img {
      margin-bottom: 3rem;
    }
    p {
      margin-bottom: 3rem;
    }
  }
`;

export default function TestimonialsColumn({ img, para, name, jobTilte }) {
  return (
    <TestimonialsColumnStyles>
      <img src={img} alt="img" />
      <p className="font-b"> {para}</p>
      <Title title={name} para={jobTilte} />
    </TestimonialsColumnStyles>
  );
}
