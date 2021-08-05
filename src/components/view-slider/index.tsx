import React from 'react';
import { Container, ViewSelected } from './style';

interface listImgProps {
  listImg: {
    id: string;
    photo: string;
  }[];
  numberSelected: number;
}

export function ViewSlider({
  listImg,
  numberSelected,
}: listImgProps): JSX.Element {
  return (
    <Container>
      {listImg.map((item, index) => (
        <ViewSelected
          key={item.id}
          isSelect={numberSelected === index ? true : false}
        />
      ))}
    </Container>
  );
}
