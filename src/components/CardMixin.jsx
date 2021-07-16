import React from 'react';
import styled from 'styled-components';
import Title from './Title';

const CardMixinStyles = styled.div`
  text-align: center;
  height: 600px;
  max-width: 720px;
  min-width: 375px;
  position: relative;
  background-color: yellow;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 15rem 4rem 15rem;
  background: url(${(props) => props.bckImg});
  @media only screen and (max-width: 1400px) {
    background-position: center center;
    padding: 0 0 3rem 0;
    .title-para {
      line-height: 3rem;
      font-size: 16px;
    }
  } ;
`;

export default function CardMixin({ bckImg, title, titleColor, para }) {
  return (
    <CardMixinStyles bckImg={bckImg}>
      {/* <img src={bckImg} alt="backgound phot" /> */}
      <Title title={title} para={para} titleColor={titleColor} />
    </CardMixinStyles>
  );
}
