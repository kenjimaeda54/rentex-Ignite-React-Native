import React, { useState, useEffect } from 'react';
import { BackButton } from '../../components/back-button';
import { CarSlider } from '../../components/car-slider';
import { Accessory } from '../../components/accessory';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Button } from '../../components/button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dots } from '../../components/dots';
import { format, addDays } from 'date-fns';
import { getIcons } from '../../utils/get-icon';
import { api } from '../../services';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidV4 } from 'uuid';
import {
  Container,
  Header,
  CardSliderImg,
  Content,
  ViewCarDetails,
  ViewDetails,
  BrandText,
  ModelText,
  ViewRente,
  DayText,
  PriceText,
  Accessories,
  Footer,
  ViewRetail,
  ViewIconCalendar,
  TextTitle,
  ViewDate,
  TextDate,
  ViewTotal,
  TitleTotal,
  ViewPrice,
  PriceTextTotal,
  PriceTotalText,
} from './style';

interface RoutesProps {
  car: Dots;
  date: string[];
}

interface DatesInterval {
  end: string;
  start: string;
}

export const userId = '@rentx:user_id';

export function SchedulingDetails(): JSX.Element {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { car, date } = useRoute().params as RoutesProps;
  const [dateInterval, setDateInterval] = useState<DatesInterval>(
    {} as DatesInterval,
  );
  const [isLoading, setIsLoading] = useState(false);

  async function handleSchedulingComplete() {
    setIsLoading(true);
    //quando usuário algar carro, preciso atualizar na minha api.
    //Usando id do carro selecionado ,faco referencia ao id no schedules_bycars
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      //.data e do response do axios,ele sempre retorna um data
      ...date,
    ];
    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then(async () => {
        const getUserId = await AsyncStorage.getItem(userId);
        const parseUserId = getUserId ? JSON.parse(getUserId!) : '';
        const carUserId = uuidV4();
        const rentalsAllPeriod = {
          car,
          carUserId,
          startDate: format(addDays(new Date(date[0]), 1), 'dd/MM/yy'),
          endDate: format(
            addDays(new Date(date[date.length - 1]), 1),
            'dd/MM/yy',
          ),
        };

        if (parseUserId === '') {
          const idUser = uuidV4();
          AsyncStorage.setItem(userId, JSON.stringify(idUser));
          await api.post('/schedules_byuser', {
            carByUser: [rentalsAllPeriod],
            user_id: idUser,
            id: idUser,
          });
          navigation.navigate('SchedulingComplete');
        } else {
          const getCars = await api.get(`/schedules_byuser/${parseUserId}`);
          const allRentalUser = [...getCars.data.carByUser, rentalsAllPeriod];
          await api.put(`/schedules_byuser/${parseUserId}`, {
            carByUser: allRentalUser,
            user_id: parseUserId,
            id: parseUserId,
          });
          navigation.navigate('SchedulingComplete');
        }
      })
      .catch((error) => Alert.alert(error));
  }

  function handleGoBack() {
    navigation.goBack();
  }
  useEffect(() => {
    setDateInterval({
      start: format(addDays(new Date(date[0]), 1), 'dd/MM/yy'),
      end: format(addDays(new Date(date[date.length - 1]), 1), 'dd/MM/yy'),
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>
      <CardSliderImg>
        <CarSlider listImg={car.photos} />
      </CardSliderImg>
      <Content
        contentContainerStyle={{ paddingHorizontal: 24, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <ViewCarDetails>
          <ViewDetails>
            <BrandText>{car.brand}</BrandText>
            <ModelText>{car.name}</ModelText>
          </ViewDetails>
          <ViewRente>
            <DayText>Ao dia</DayText>
            <PriceText>R$ {car.rent.price}</PriceText>
          </ViewRente>
        </ViewCarDetails>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              icon={getIcons(accessory.type)}
              name={accessory.name}
            />
          ))}
        </Accessories>
        <ViewRetail>
          <ViewIconCalendar>
            <Feather
              name="calendar"
              size={20}
              color={colors.background_secondary}
            />
          </ViewIconCalendar>
          <ViewDate>
            <TextTitle>De</TextTitle>
            <TextDate>{dateInterval.start}</TextDate>
          </ViewDate>
          <Feather name="chevron-right" color={colors.text_detail} size={20} />
          <ViewDate>
            <TextTitle>Até</TextTitle>
            <TextDate>{dateInterval.end}</TextDate>
          </ViewDate>
        </ViewRetail>
        <ViewTotal>
          <TitleTotal>Total</TitleTotal>
          <ViewPrice>
            <PriceTextTotal>{`R$ ${car.rent.price} x ${date.length}  diárias`}</PriceTextTotal>
            <PriceTotalText>R$ {date.length * car.rent.price}</PriceTotalText>
          </ViewPrice>
        </ViewTotal>
      </Content>
      <Footer>
        <Button
          description="Alugar agora"
          color={colors.success}
          onPress={handleSchedulingComplete}
          enabled={!isLoading}
          loading={isLoading}
          style={{ opacity: isLoading ? 0.3 : 1 }}
        />
      </Footer>
    </Container>
  );
}
