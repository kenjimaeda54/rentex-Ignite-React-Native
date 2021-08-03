import React, { ComponentProps, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Container, FieldText, IconView } from './style';

interface FieldInputProps extends TextInputProps {
  nameIcon: ComponentProps<typeof Feather>['name'];
  value?: string;
}

export function PassWordInput({
  nameIcon,
  value,
  ...props
}: FieldInputProps): JSX.Element {
  const { colors } = useTheme();
  const [isInVisible, setIsInVisible] = useState(true);
  const [isFilled, setIsFilled] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  function handleVisiblePassword() {
    setIsInVisible((prevState) => !prevState);
    // e possível fazer dessa maneira também setIsInVisible(!isInVisible),
    //outra maneira e mais intuitiva\
  }

  function handleFocusInput() {
    setIsFocus(true);
  }

  function handleBLurInput() {
    setIsFocus(false);
    setIsFilled(!!value);
  }

  return (
    <Container>
      <IconView isFocus={isFocus}>
        <Feather
          name={nameIcon}
          color={isFocus || isFilled ? colors.main : colors.text_detail}
          size={20}
        />
      </IconView>
      <FieldText
        // on focus e onblur , sao propriedades do input,onFocus e quando esta dentro do input
        // e onBlur e quando saiu do input
        onFocus={handleFocusInput}
        onBlur={handleBLurInput}
        secureTextEntry={isInVisible ? true : false}
        isFocus={isFocus}
        {...props}
      />
      <BorderlessButton onPress={handleVisiblePassword}>
        <IconView isFocus={isFocus}>
          <Feather
            name={isInVisible ? 'eye-off' : 'eye'}
            color={colors.text_detail}
            size={20}
          />
        </IconView>
      </BorderlessButton>
    </Container>
  );
}
