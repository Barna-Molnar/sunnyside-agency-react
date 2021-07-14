import React from 'react';
import styled from 'styled-components';
import TestimonialsColumn from './TestimonialsColumn';
import Emily from '../images/icons&photos/image-emily.jpg';
import Thomas from '../images/icons&photos/image-thomas.jpg';
import jennie from '../images/icons&photos/image-jennie.jpg';

const TestimonialsStyles = styled.div`
  padding: 16rem 10rem 8rem 10rem;
  text-align: center;
  max-width: 1440px;
  .testimonials__title {
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    color: var(--grayish-blue);
  }
  .testimonials {
    display: flex;
  }
`;

export default function TestimonialsSection() {
  return (
    <TestimonialsStyles>
      <h1 className="font-f testimonials__title">Clients testimonials</h1>
      <div className="testimonials">
        <TestimonialsColumn
          img={Emily}
          para={
            'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
          }
          name={'Emily R.'}
          jobTilte={'Marketing Director'}
        />
        <TestimonialsColumn
          img={Thomas}
          para={
            ' Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.'
          }
          name={'Thomas S.'}
          jobTilte={' Chief Operating Officer'}
        />
        <TestimonialsColumn
          img={jennie}
          para={
            'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!'
          }
          name={' Jennie F.'}
          jobTilte={'Business Owner'}
        />{' '}
      </div>
    </TestimonialsStyles>
  );
}
