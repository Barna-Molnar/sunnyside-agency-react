import React from 'react';
import styled from 'styled-components';
import Card from './CardNoImg';
import Egg from '../images/desktop/image-transform.jpg';
import Cup from '../images/desktop/image-stand-out.jpg';
import Cherry from '../images/desktop/image-graphic-design.jpg';
import Orange from '../images/desktop/image-photography.jpg';
import CardNoText from './CardNoText';
import CardNoImg from './CardNoImg';

const CardsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Cards() {
  return (
    <CardsStyles>
      <CardNoImg
        title={'Transform your brand'}
        para={
          'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
        }
        underLineColor="yellow"
      />
      <CardNoText bckImg={Egg} />
      <CardNoText bckImg={Cup} />
      <CardNoImg
        title={'Stand out to the right audience'}
        para={
          'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. '
        }
        underLineColor="red"
      />
      {/* <Card bckImg={Cherry} title />
      <Card bckImg={Orange} title /> */}
    </CardsStyles>
  );
}
