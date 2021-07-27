import React from 'react';
import { BackButton } from '../../components/back-button';
import { CarSlider } from '../../components/car-slider';
import { ViewSlider } from '../../components/view-slider';
import { Accessory } from '../../components/accessory';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Button } from '../../components/button';
import gasoline from '../../assets/gasoline.svg';
import people from '../../assets/people.svg';
import force from '../../assets/force.svg';
import acceleration from '../../assets/acceleration.svg';
import exchange from '../../assets/exchange.svg';
import speed from '../../assets/speed.svg';

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

export function SchedulingDetails(): JSX.Element {
  const { colors } = useTheme();
  return (
    <Container>
      <Header>
        <BackButton />
        <ViewSlider />
      </Header>
      <CardSliderImg>
        <CarSlider
          listImg={[
            'data:image/jpeg;base64,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',
          ]}
        />
      </CardSliderImg>
      <Content
        contentContainerStyle={{ paddingHorizontal: 24, alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <ViewCarDetails>
          <ViewDetails>
            <BrandText>Lamborghini</BrandText>
            <ModelText>Huracan</ModelText>
          </ViewDetails>
          <ViewRente>
            <DayText>Ao dia</DayText>
            <PriceText>R$ 580</PriceText>
          </ViewRente>
        </ViewCarDetails>
        <Accessories>
          <Accessory icon={speed} name="380km/h" />
          <Accessory icon={acceleration} name="3.2s" />
          <Accessory icon={force} name="800 HP" />
          <Accessory icon={gasoline} name="Gasolina" />
          <Accessory icon={exchange} name="Auto" />
          <Accessory icon={people} name="2 pessoas" />
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
            <TextDate>18/06/2021</TextDate>
          </ViewDate>
          <Feather name="chevron-right" color={colors.text_detail} size={20} />
          <ViewDate>
            <TextTitle>Até</TextTitle>
            <TextDate>20/06/2021</TextDate>
          </ViewDate>
        </ViewRetail>
        <ViewTotal>
          <TitleTotal>Total</TitleTotal>
          <ViewPrice>
            <PriceTextTotal>R$ 580 x3 diárias</PriceTextTotal>
            <PriceTotalText>R$ 2.900</PriceTotalText>
          </ViewPrice>
        </ViewTotal>
      </Content>
      <Footer>
        <Button description="Alugar agora" color={colors.success} />
      </Footer>
    </Container>
  );
}
