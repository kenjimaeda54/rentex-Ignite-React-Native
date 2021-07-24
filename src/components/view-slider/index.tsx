import React from 'react';
import { Container, ViewSelected } from './style';

export function ViewSlider(): JSX.Element {
  return (
    <Container>
      <ViewSelected isSelect={false} />
      <ViewSelected isSelect={true} />
      <ViewSelected isSelect={false} />
      <ViewSelected isSelect={false} />
    </Container>
  );
}
