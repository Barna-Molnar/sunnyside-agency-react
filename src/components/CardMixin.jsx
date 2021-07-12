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

export default function CardMixin({ bckImg, title, titleColor, para }) {
  return (
    <CardMixinStyles bckImg={bckImg}>
      {/* <img src={bckImg} alt="backgound phot" /> */}
      <Title title={title} para={para} titleColor={titleColor} />
    </CardMixinStyles>
  );
}
