import React from 'react';
import styled from 'styled-components';
import TestimonialsColumn from './TestimonialsColumn';
import Emily from '../images/icons&photos/image-emily.jpg';
import Thomas from '../images/icons&photos/image-thomas.jpg';
import jennie from '../images/icons&photos/image-jennie.jpg';

const TestimonialsStyles = styled.div`
  padding: 15rem 10rem;
  text-align: center;
`;

export default function TestimonialsSection() {
  return (
    <TestimonialsStyles>
      <h1>Clients testimonials</h1>
      <div className="testimonials">
        <TestimonialsColumn
          img={Emily}
          para={
            'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.'
          }
          name={'Emily R.'}
          jobTilte={'Marketing Director'}
        />
      </div>
    </TestimonialsStyles>
  );
}
