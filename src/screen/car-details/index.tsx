import React from 'react';
import { BackButton } from '../../components/back-button';
import { CarSlider } from '../../components/car-slider';
import { ViewSlider } from '../../components/view-slider';
import { Accessory } from '../../components/accessory';
import { Button } from '../../components/button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dots } from '../../components/dots';
import { getIcons } from '../../utils/get-icon';

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
  AboutText,
  Accessories,
  Footer,
} from './style';

interface RoutesProps {
  car: Dots;
}

export function CarDetails(): JSX.Element {
  const navigation = useNavigation();
  const { car } = useRoute().params as RoutesProps;

  function handleScheduling() {
    navigation.navigate('Scheduling');
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleGoBack} />
        <ViewSlider />
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
            <DayText>{car.rent.period}</DayText>
            <PriceText>R$ {car.rent.price}</PriceText>
          </ViewRente>
        </ViewCarDetails>
        <Accessories>
          {car.accessories.map((accessory) => (
            <Accessory
              name={accessory.name}
              key={accessory.type}
              icon={getIcons(accessory.type)}
            />
          ))}
        </Accessories>
        <AboutText>{car.about}</AboutText>
      </Content>
      {/*content e uma scroll view caso o botão esteja la dentro,
      vai acompanhar o scroll,melhor maneira de resolver isso e colocar
      botão fora, assim sempre vai ficar visível */}
      <Footer>
        <Button
          description="Escolha período do aluguel"
          onPress={handleScheduling}
        />
      </Footer>
    </Container>
  );
}
