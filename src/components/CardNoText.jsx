import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
  text-align: center;
  height: 600px;
  width: 720px;
`;

export default function CardNoText({ bckImg }) {
  return (
    <CardStyles>
      <img src={bckImg} alt="backgound phot" />
    </CardStyles>
  );
}
