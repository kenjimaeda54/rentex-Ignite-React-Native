/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';
import { Carr } from '../../components/carr';
import { api } from '../../services';
import { Dots } from '../../components/dots';
import { Loading } from '../../components/loading';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
  Container,
  Header,
  HeaderContent,
  Title,
  CarList,
  CarIconFooter,
} from './style';

export function HomeScreen(): JSX.Element {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [fetchCars, setFetchCars] = useState<Dots[]>([]);
  const [loading, setLoading] = useState(true);
  async function fetchApi() {
    try {
      const response = await api.get('/cars');
      setFetchCars(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

  function handleCarDetails(car: Dots) {
    navigation.navigate('CarDetails', { car });
  }

  function handleListOfCars() {
    navigation.navigate('ListOfCars');
  }

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
      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={fetchCars}
          keyExtractor={(item) => item.id}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          renderItem={({ item }) => (
            <Carr onPress={() => handleCarDetails(item)} data={item} />
          )}
        />
      )}
      <CarIconFooter onPress={handleListOfCars}>
        <Ionicons
          name="car-sport"
          size={32}
          color={colors.background_secondary}
        />
      </CarIconFooter>
    </Container>
  );
}
