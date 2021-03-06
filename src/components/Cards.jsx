import React from 'react';
import styled from 'styled-components';
import EggDesktop from '../images/desktop/image-transform.jpg';
import EggMobile from '../images/mobile/image-transform.jpg';
import CupDekstop from '../images/desktop/image-stand-out.jpg';
import CupMobile from '../images/mobile/image-stand-out.jpg';
import Cherry from '../images/desktop/image-graphic-design.jpg';
import Orange from '../images/desktop/image-photography.jpg';
import CardNoText from './CardNoText';
import CardNoImg from './CardNoImg';
import CardMixin from './CardMixin';

const CardsStyles = styled.div`
  .row {
    display: flex;
  }
  @media only screen and (max-width: 1438px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .row {
      display: inline-block;

      width: 100%;
      max-width: 375px;
    }
    .row:nth-child(1) {
      display: flex;
      flex-direction: column-reverse;
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
        <CardNoText bckImg={[EggDesktop, EggMobile]} />
      </div>
      <div className="row">
        <CardNoText bckImg={[CupDekstop, CupMobile]} />
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
