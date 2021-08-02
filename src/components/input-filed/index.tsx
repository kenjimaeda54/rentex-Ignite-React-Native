import React, { ComponentProps } from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, FieldText, IconView } from './style';

interface FieldInputProps extends TextInputProps {
  nameIcon: ComponentProps<typeof Feather>['name'];
}

export default function FieldInput({
  nameIcon,
  ...props
}: FieldInputProps): JSX.Element {
  const { colors } = useTheme();
  return (
    <Container>
      <IconView>
        <Feather name={nameIcon} color={colors.text_detail} size={20} />
      </IconView>
      <FieldText {...props} />
    </Container>
  );
}
