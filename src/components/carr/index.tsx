import React from 'react';
import Gasoline from '../../assets/gasoline.svg';
import { Dots } from '../../components/dots';
import {
  Container,
  Details,
  TextBrandCar,
  TextModelCar,
  ViewDiary,
  ContentDiary,
  TextDay,
  TextPrice,
  Type,
  PhotoCar,
} from './style';

interface CarrProps {
  data: Dots;
}

export function Carr({ data }: CarrProps): JSX.Element {
  return (
    <Container>
      <Details>
        <TextBrandCar>d{data.brand}</TextBrandCar>
        <TextModelCar> {data.name} </TextModelCar>
        <ViewDiary>
          <ContentDiary>
            <TextDay> {data.rent.period} </TextDay>
            <TextPrice> {data.rent.price} </TextPrice>
          </ContentDiary>
          <Type>
            <Gasoline />
          </Type>
        </ViewDiary>
      </Details>

      <PhotoCar source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
