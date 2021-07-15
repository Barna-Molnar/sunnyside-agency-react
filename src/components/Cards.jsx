import React from 'react';
import styled from 'styled-components';
import Egg from '../images/desktop/image-transform.jpg';
import Cup from '../images/desktop/image-stand-out.jpg';
import Cherry from '../images/desktop/image-graphic-design.jpg';
import Orange from '../images/desktop/image-photography.jpg';
import CardNoText from './CardNoText';
import CardNoImg from './CardNoImg';
import CardMixin from './CardMixin';

const CardsStyles = styled.div`
  .row {
    display: flex;
  }
  @media only screen and (max-width: 1430px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .row {
      display: inline-block;
      width: 100%;
    }
  }
`;

export default function Cards() {
  return (
    <CardsStyles>
      <div className="row">
        <CardNoImg
          title={'Transform your brand'}
          para={
            'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
          }
          underLineColor="yellow"
        />
        <CardNoText bckImg={Egg} />
      </div>
      <div className="row">
        <CardNoText bckImg={Cup} />
        <CardNoImg
          title={'Stand out to the right audience'}
          para={
            'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. '
          }
          underLineColor="red"
        />
      </div>
      <div className="row">
        <CardMixin
          bckImg={Cherry}
          title={'Graphic Design'}
          para={
            'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
          }
          titleColor={'var(--dark-cyan-text)'}
        />
        <CardMixin
          bckImg={Orange}
          title={'Photography'}
          para={
            'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
          }
          titleColor={'var(--dark-blue-text)'}
        />
      </div>
    </CardsStyles>
  );
}
