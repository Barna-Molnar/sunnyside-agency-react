import React from 'react';
import Title from './Title';

export default function TestimonialsColumn({ img, para, name, jobTilte }) {
  return (
    <div>
      <img src={img} alt="img" />
      <p>{para}</p>
      <Title title={name} para={jobTilte} />
    </div>
  );
}
