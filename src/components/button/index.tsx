import React from 'react';
import { ButtonContainer, Description, FooterLoading } from './style';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Loading } from '../loading';
import { useTheme } from 'styled-components';

interface ButtonProps extends RectButtonProps {
  description: string;
  color?: string;
  loading?: boolean;
}

export function Button({
  description,
  color,
  loading = false,
  ...rest
}: ButtonProps): JSX.Element {
  const { colors } = useTheme();
  return (
    <ButtonContainer color={color} {...rest}>
      {loading ? (
        <FooterLoading>
          <Loading color={colors.main} />
        </FooterLoading>
      ) : (
        <Description> {description}</Description>
      )}
    </ButtonContainer>
  );
}
