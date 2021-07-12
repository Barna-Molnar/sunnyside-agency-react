import React from 'react';
import styled from 'styled-components';

const TitleStyles = styled.div`
  padding: 2rem;
  h1 {
    font-size: 2.7rem;
    font-weight: 900;
    margin-bottom: 3rem;
    color: ${(props) => props.titleColor};

    opacity: 0.9;
  }
  p {
    font-size: 18px;
    color: ${(props) => props.titleColor};
    opacity: 0.8;
  }
`;

export default function Title({ title, para, titleColor }) {
  return (
    <TitleStyles titleColor={titleColor}>
      <h1 className="font-f">{title}</h1>
      <p className="font-b">{para}</p>
    </TitleStyles>
  );
}
