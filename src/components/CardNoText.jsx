import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.div`
  display: flex;
  flex-shrink: 2;
  max-height: 600px;
  max-width: 720px;
  min-width: 500px;
`;
export default function CardNoText({ bckImg }) {
  console.log(bckImg);
  return (
    <CardStyles bckImg={bckImg}>
      <img src={bckImg} alt="backgound phot" />
    </CardStyles>
  );
}
