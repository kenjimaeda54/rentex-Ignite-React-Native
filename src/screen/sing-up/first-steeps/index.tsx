import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Bullet } from '../../../components/bullet';
import { FieldInput } from '../../../components/input-filed';
import { Button } from '../../../components/button';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
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

export function SingUpFirstSteeps(): JSX.Element {
  const { colors } = useTheme();
  const { navigate } = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cnh, setCnh] = useState('');

  async function handleSingUp() {
    //validação e inversa em relação aos componentes na tela
    //por exemplo meu ultimo input e o CHN,aqui vai ser a primeira validação
    try {
      const schema = Yup.object().shape({
        cnh: Yup.string().required('CNH e obrigatória'),
        email: Yup.string()
          .required('Email e obrigatório')
          .email('Email precisa ser valido'),
        name: Yup.string().required('Nome e obrigatório'),
      });
      const data = { email, name, cnh };
      await schema.validate(data);
      // se passar data direto como objeto depois fica difícil manipular
      //usando user: data , consigo pegar o campo user
      navigate('SingUpSecondSteeps', { user: data });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return Alert.alert(error.message);
      }
      Alert.alert('Precisa verificar os campos');
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
            <TitleForm> 1. Dados </TitleForm>
            <FieldInput
              nameIcon="user"
              onChangeText={setName}
              placeholder="Nome"
              value={name}
            />
            <FieldInput
              nameIcon="mail"
              keyboardType="email-address"
              placeholder="E-mail"
              value={email}
              onChangeText={setEmail}
            />
            <FieldInput
              nameIcon="credit-card"
              keyboardType="numeric"
              placeholder="CNH"
              onChangeText={setCnh}
              value={cnh}
            />
          </Form>
          <Footer>
            <Button description="Proximo" onPress={handleSingUp} />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
