import React from 'react';
import { useTheme } from 'styled-components';
import { Button } from '../../components/button';
import FieldInput from '../../components/input-filed';
import {
  Container,
  Header,
  TitleText,
  SubTitle,
  ViewFooter,
  FormView,
} from './styles';

export function SingIn(): JSX.Element {
  const { colors } = useTheme();
  return (
    <Container>
      <Header>
        <TitleText>
          Estamos{'\n'}
          quase lá.
        </TitleText>
        <SubTitle>
          Faça seu login para começar{'\n'}
          uma experiência incrível.
        </SubTitle>
      </Header>
      <FormView>
        <FieldInput
          nameIcon="mail"
          placeholder="E-mail"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </FormView>

      <ViewFooter>
        <Button
          description="Login"
          loading={false}
          enabled={false}
          style={{ marginVertical: 8 }}
        />
        <Button
          description="Criar conta gratuita"
          color={colors.background_secondary}
          loading={false}
          enabled={false}
          colorText={colors.text_Dark}
        />
      </ViewFooter>
    </Container>
  );
}
