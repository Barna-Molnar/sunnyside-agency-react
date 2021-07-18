import React from 'react';
import styled from 'styled-components';

const CardNoTextStyles = styled.div`
  max-width: 720px;
  max-height: 600px;
  img {
    width: 100%;
    min-height: 100%;
  }

  @media only screen and (max-width: 1440px) {
  }
`;
export default function CardNoText({ bckImg }) {
  const [desktop, mobile] = bckImg;

  return (
    <CardNoTextStyles bckImg={bckImg}>
      <img
        className="img"
        src={mobile}
        sizes="375px, 720px"
        srcSet={`${mobile} 375w, ${desktop} 500w`}
        alt="backgound phot"
      />
    </CardNoTextStyles>
  );
}
