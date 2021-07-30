import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  Content,
} from './style';
import { userId } from '../scheduling-details';
import { useTheme } from 'styled-components';
import { Dots } from '../../components/dots';
import { api } from '../../services';
import { BackButton } from '../../components/back-button';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList } from 'react-native-gesture-handler';
import { Carr } from '../../components/carr';
import { Loading } from '../../components/loading';

interface FecthCar {
  car: Dots[];
}

export function ListOfCars(): JSX.Element {
  const [detailsCar, setDetailsCar] = useState<Dots[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();
  const navigation = useNavigation();

  async function getDetailsUser() {
    try {
      const getId = await AsyncStorage.getItem(userId);
      const stringId = JSON.parse(getId!);
      if (stringId) {
        const response = await api.get(`schedules_byuser/?id=${stringId}`);
        const getCar: FecthCar[] = response.data;
        const [data] = getCar.map((item) => item.car);
        setDetailsCar(data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    getDetailsUser();
  }, []);
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header>
        <BackButton
          onPress={handleGoBack}
          colorProps={colors.background_primary}
        />
        <Title>Seus agendamentos, estão aqui.</Title>
        <SubTitle>Conforto, segurança e praticidade</SubTitle>
      </Header>
      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>2</AppointmentsQuantity>
        </Appointments>
        {isLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={detailsCar}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Carr data={item} />}
            contentContainerStyle={{
              paddingVertical: 29,
            }}
          />
        )}
      </Content>
    </Container>
  );
}
