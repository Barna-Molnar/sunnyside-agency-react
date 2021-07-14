import React from 'react';
import styled from 'styled-components';
import Orange from '../images/desktop/image-gallery-orange.jpg';
import MilkBottle from '../images/desktop/image-gallery-milkbottles.jpg';
import Cone from '../images/desktop/image-gallery-cone.jpg';
import SugarCubes from '../images/desktop/image-gallery-sugarcubes.jpg';

const BannerStyles = styled.div`
  display: flex;
  max-width: 1440px;
  img {
    object-fit: cover;
    width: calc(100% / 4);
  }
`;

export default function Banner() {
  return (
    <BannerStyles>
      <img src={MilkBottle} alt="" />
      <img src={Orange} alt="" />
      <img src={Cone} alt="" />
      <img src={SugarCubes} alt="" />
    </BannerStyles>
  );
}
