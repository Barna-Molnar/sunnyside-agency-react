import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const CardMixinStyles = styled.div`
  text-align: center;
  height: 600px;
  width: 720px;
  position: relative;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 15rem 5rem 15rem;
  background: url(${(props) => props.bckImg});
`;

export default function CardMixin({ bckImg }) {
  return (
    <CardMixinStyles bckImg={bckImg}>
      {/* <img src={bckImg} alt="backgound phot" /> */}
      <Title
        className="title"
        title={'Graphic Design'}
        para={
          'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
        }
        titleColor={'var(--dark-cyan-text)'}
      />
    </CardMixinStyles>
  );
}
