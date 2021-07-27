import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Title } from './style';

interface ButtonConfirmProps extends RectButtonProps {
  title: string;
}

export default function ButtonConfirm({
  title,
  ...rest
}: ButtonConfirmProps): JSX.Element {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
