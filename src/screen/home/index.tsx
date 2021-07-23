import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, HeaderContent, Title } from './style';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';

export function HomeScreen(): JSX.Element {
  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(112)} height={RFValue(12)} />
          <Title>Total de 12 carros</Title>
        </HeaderContent>
      </Header>
    </Container>
  );
}
