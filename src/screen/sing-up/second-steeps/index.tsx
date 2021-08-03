import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Bullet } from '../../../components/bullet';
import { PassWordInput } from '../../../components/password-input';
import { Button } from '../../../components/button';
import { useRoute, useNavigation } from '@react-navigation/native';
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
import { api } from '../../../services';

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
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { user } = params as ParamsProps;

  async function handleConfirmPassWord() {
    if (!passWord || !passWordConfirm) {
      return Alert.alert('Precisa preencher os campos de senha e confirmação');
    }
    if (passWord !== passWordConfirm) {
      return Alert.alert('Senhas precisam ser iguais');
    }
    //a rotas users precisa ser a mesma sugerida pela api
    await api
      .post('/users', {
        //os campos do objeto precisam ser iguais da api,name,password,driver_license...
        name: user.name,
        password: passWord,
        driver_license: user.cnh,
        email: user.email,
      })
      .then(() => {
        navigate('Confirmation', {
          title: 'Conta criada!',
          description: `Agora você só precisa\nfazer  o login para usar aplicativo`,
          nextScreen: 'SingIn',
        });
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Nao foi possível cadastrar');
      });
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
