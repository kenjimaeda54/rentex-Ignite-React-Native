import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../components/button';
import { useNavigation } from '@react-navigation/native';
import FieldInput from '../../components/input-filed';
import PassWordInput from '../../components/password-input';
import * as Yup from 'yup';
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
  const [email, setEmail] = useState('');
  const [passWord, setPassWord] = useState('');
  const navigation = useNavigation();

  async function handleSingIn() {
    try {
      const numberPassword = Number(passWord);
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail e um campo obrigatório')
          .email('Por favor coloque um e-mail valido'),
        numberPassword: Yup.number()
          .required('Senha e campo obrigatório')
          .positive('Senha precisa ser positiva'),
      });
      await schema.validate({ email, numberPassword });
      alert('passou');
    } catch (error) {
      //preciso tratar a possibilidade de gerar um erro de excussão da api e também outro erro que e retornado,
      //pelo yup caso nao seja validado meu schema
      if (error instanceof Yup.ValidationError) {
        Alert.alert(error.message);
      } else {
        Alert.alert(
          'Aconteceu algum erro nas suas credencias,verifique com atenção o e-mail e a senha',
        );
      }
    }
  }

  function handleSingUp() {
    navigation.navigate('SingUpFirstSteeps');
  }

  return (
    // KeyboardAvoidingView vai tratar os inputs.Quando input selecionado sobe a tela para
    // visualizar os componentes,precisa retirar o flex de 1 do container,porque KeyboardAvoidingView
    // ja possui esse comportamento
    <KeyboardAvoidingView enabled behavior="position">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              value={email}
              onChangeText={setEmail}
            />
            <PassWordInput
              value={passWord}
              onChangeText={setPassWord}
              nameIcon="lock"
              placeholder="Senha"
            />
          </FormView>

          <ViewFooter>
            <Button
              description="Login"
              loading={false}
              enabled={true}
              style={{ marginVertical: 8 }}
              onPress={handleSingIn}
            />
            <Button
              description="Criar conta gratuita"
              color={colors.background_secondary}
              loading={false}
              enabled={false}
              onPress={handleSingUp}
              colorText={colors.text_Dark}
            />
          </ViewFooter>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
