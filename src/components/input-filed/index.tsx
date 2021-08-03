import React, { ComponentProps, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, FieldText, IconView } from './style';

interface FieldInputProps extends TextInputProps {
  nameIcon: ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function FieldInput({
  nameIcon,
  value,
  ...props
}: FieldInputProps): JSX.Element {
  const { colors } = useTheme();
  const [isFilled, setIsFilled] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  function handleFocusInput() {
    setIsFocus(true);
  }

  function handleBLurInput() {
    setIsFocus(false);
    setIsFilled(!!value);
  }

  return (
    //atenção toda vez que  o pai sofre alteração afeta os filhos
    //anteriormente havia estado no container,assim esse estado
    //renderizava a tela duas vezes uma para montar componente e outra
    //atualizar estado,isso ocorria quebra no componente filho
    <Container>
      <IconView isFocus={isFocus}>
        <Feather
          name={nameIcon}
          color={isFocus || isFilled ? colors.main : colors.text_detail}
          size={20}
        />
      </IconView>
      {/* refactor esta aqui,foi passado direto para componente nao componente pai */}
      <FieldText
        onFocus={handleFocusInput}
        onBlur={handleBLurInput}
        isFocus={isFocus}
        {...props}
      />
    </Container>
  );
}
