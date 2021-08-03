import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Bullet } from '../../../components/bullet';
import { PassWordInput } from '../../../components/password-input';
import { Button } from '../../../components/button';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {
  Container,
  Header,
  IconView,
  Content,
  TitleHeader,
  SubTitle,
  Form,
  TitleForm,
  Footer,
} from './style';
import { useRoute } from '@react-navigation/native';

interface ParamsProps {
  user: {
    email: string;
    name: string;
    cnh: string;
  };
}

export function SingUpSecondSteeps(): JSX.Element {
  const { colors } = useTheme();
  const [passWord, setPassWord] = useState('');
  const [passWordConfirm, setPassWordConfirm] = useState('');
  const { params } = useRoute();
  const { user } = params as ParamsProps;
  console.log(user);

  function handleConfirmPassWord() {
    if (!passWord || !passWordConfirm) {
      return Alert.alert('Precisa preencher os campos de senha e confirmação');
    }
    if (passWord !== passWordConfirm) {
      return Alert.alert('Senhas precisam ser iguais');
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <IconView>
              <Feather name="chevron-left" size={15} color={colors.text} />
            </IconView>
            <Bullet />
          </Header>
          <Content>
            <TitleHeader>
              Crie sua{`\n`}
              conta
            </TitleHeader>
            <SubTitle>
              Faça seu cadastro de{`\n`}
              forma rápida e fácil.
            </SubTitle>
          </Content>
          <Form>
            <TitleForm> 1. Senha </TitleForm>
            <PassWordInput
              nameIcon="lock"
              onChangeText={setPassWord}
              placeholder="Senha"
            />
            <PassWordInput
              nameIcon="lock"
              onChangeText={setPassWordConfirm}
              placeholder="Repetir senha"
            />
          </Form>
          <Footer>
            <Button
              onPress={handleConfirmPassWord}
              description="Cadastrar"
              color={colors.success}
            />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
