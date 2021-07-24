import React from 'react';
import { ButtonBack } from './style';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

interface BackButtonProps extends BorderlessButtonProps {
  colorProps?: string;
}

export function BackButton({
  colorProps,
  ...rest
}: BackButtonProps): JSX.Element {
  const { colors } = useTheme();

  return (
    <ButtonBack {...rest}>
      <Feather
        name="chevron-left"
        size={24}
        color={colorProps ? colorProps : colors.text}
      />
    </ButtonBack>
  );
}
