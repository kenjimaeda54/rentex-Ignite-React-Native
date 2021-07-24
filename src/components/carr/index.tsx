import React from 'react';
import Gasoline from '../../assets/gasoline.svg';
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

interface DataProps {
  brandCar: string;
  modelCar: string;
  rent: {
    day: string;
    price: string;
  };
  thumbnail: string;
}

interface CarrProps {
  data: DataProps;
}

export function Carr({ data }: CarrProps): JSX.Element {
  return (
    <Container>
      <Details>
        <TextBrandCar>d{data.brandCar}</TextBrandCar>
        <TextModelCar> {data.modelCar} </TextModelCar>
        <ViewDiary>
          <ContentDiary>
            <TextDay> {data.rent.day} </TextDay>
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
