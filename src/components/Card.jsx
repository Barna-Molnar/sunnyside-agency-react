import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const CardStyles = styled.div`
  padding: 10rem;
  text-align: center;
  height: 400px;
  width: 50%;
  background-color: red;
`;

export default function Card({ bckImg }) {
  return (
    <CardStyles>
      <Title />
    </CardStyles>
  );
}
