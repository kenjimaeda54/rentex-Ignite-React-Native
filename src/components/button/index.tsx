import React from 'react';
import { ButtonContainer, Description } from './style';
import { RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
  description: string;
  color?: string;
}

export function Button({
  description,
  color,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <ButtonContainer color={color} {...rest}>
      <Description>{description}</Description>
    </ButtonContainer>
  );
}
