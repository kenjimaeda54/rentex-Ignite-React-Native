/* eslint-disable no-unused-vars */
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, HeaderContent, Title, CarList } from './style';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';
import { Carr } from '../../components/carr';

export function HomeScreen(): JSX.Element {
  const dataCar = {
    brandCar: 'Audi',
    modelCar: 'RS 5 Coupé',
    rent: {
      day: 'Ao dia',
      price: 'R$ 120',
    },
    thumbnail:
      'https://img1.gratispng.com/20180926/iqw/kisspng-2-18-audi-rs-5-car-audi-s5-audi-a5-audi-leasen-total-car-lease-5bac3bbe1e3f94.5714384315380141421239.jpg',
  };

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
      <CarList
        data={[1, 2, 3, 4, 6, 7, 8, 9]}
        keyExtractor={(item) => String(item)}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        renderItem={({ item }) => <Carr data={dataCar} />}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 21 }}
      />
    </Container>
  );
}
