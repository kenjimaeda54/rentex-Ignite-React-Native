import React from 'react';
import { Container, ViewSelected } from './style';

interface listImgProps {
  listImg: string[];
  numberSelected: number;
}

export function ViewSlider({
  listImg,
  numberSelected,
}: listImgProps): JSX.Element {
  return (
    <Container>
      {listImg.map((__, index) => (
        <ViewSelected
          key={String(index)}
          isSelect={numberSelected === index ? true : false}
        />
      ))}
    </Container>
  );
}
