/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { Container, Header, HeaderContent, Title, CarList } from './style';
import { StatusBar } from 'react-native';
import Logo from '../../assets/logo.svg';
import { Carr } from '../../components/carr';
import { api } from '../../services';
import { Dots } from '../../components/dots';
import { Loading } from '../../components/loading';

export function HomeScreen(): JSX.Element {
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
          renderItem={({ item }) => <Carr data={item} />}
        />
      )}
    </Container>
  );
}
