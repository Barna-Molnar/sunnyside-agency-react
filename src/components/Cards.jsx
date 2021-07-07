import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Cards() {
  return (
    <CardsStyles>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </CardsStyles>
  );
}
