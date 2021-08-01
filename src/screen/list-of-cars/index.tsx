import React, { useEffect, useState, Fragment } from 'react';
import { StatusBar } from 'react-native';
import { userId } from '../scheduling-details';
import { useTheme } from 'styled-components';
import { Dots } from '../../components/dots';
import { api } from '../../services';
import { BackButton } from '../../components/back-button';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { Carr } from '../../components/carr';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  Content,
  WrapperCar,
  PeriodTex,
  ViewDate,
  DateTitle,
  ViewLoading,
} from './style';
import { LoadingLottie } from '../../components/loading-lottie';

interface DataProps {
  car: Dots;
  startDate: string;
  endDate: string;
  carUserId: string;
}

interface DetailsCarProps {
  carByUser: DataProps[];
}

export function ListOfCars(): JSX.Element {
  const [detailsCar, setDetailsCar] = useState<DataProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { colors } = useTheme();
  const navigation = useNavigation();

  async function getDetailsUser() {
    try {
      const getId = await AsyncStorage.getItem(userId);
      const stringId = JSON.parse(getId!);
      if (stringId) {
        const response = await api.get(`schedules_byuser/?id=${stringId}`);
        const getCar: DetailsCarProps[] = response.data;
        const [datas] = getCar.map((item) => item.carByUser);
        const rentalPeriod = datas.map((item) => {
          const car = item.car;
          const startDate = item.startDate;
          const endDate = item.endDate;
          const carUserId = item.carUserId;
          return {
            car,
            startDate,
            endDate,
            carUserId,
          };
        });
        setDetailsCar(rentalPeriod);
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
          <AppointmentsQuantity>{detailsCar.length}</AppointmentsQuantity>
        </Appointments>
      </Content>
      {isLoading ? (
        <ViewLoading>
          <LoadingLottie />
        </ViewLoading>
      ) : (
        <FlatList
          data={detailsCar}
          keyExtractor={(item) => item.carUserId}
          renderItem={({ item }) => {
            return (
              <Fragment>
                <Carr data={item.car} style={{ marginTop: 29 }} />
                <WrapperCar>
                  <PeriodTex>Período</PeriodTex>
                  <ViewDate>
                    <DateTitle>{item.startDate}</DateTitle>
                    <AntDesign
                      name="arrowright"
                      color={colors.text_detail}
                      size={14}
                      style={{ marginHorizontal: 10 }}
                    />

                    <DateTitle>{item.endDate}</DateTitle>
                  </ViewDate>
                </WrapperCar>
              </Fragment>
            );
          }}
          contentContainerStyle={{
            paddingBottom: 50,
            paddingHorizontal: 16,
          }}
        />
      )}
    </Container>
  );
}
