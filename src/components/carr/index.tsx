import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Dots } from '../../components/dots';
import { getIcons } from '../../utils/get-icon';
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

interface CarrProps extends RectButtonProps {
  data: Dots;
}

export function Carr({ data, ...rest }: CarrProps): JSX.Element {
  const Icon = getIcons(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <TextBrandCar>d{data.brand}</TextBrandCar>
        <TextModelCar> {data.name} </TextModelCar>
        <ViewDiary>
          <ContentDiary>
            <TextDay> {data.rent.period} </TextDay>
            <TextPrice> R$ {data.rent.price} </TextPrice>
          </ContentDiary>
          <Type>
            <Icon />
          </Type>
        </ViewDiary>
      </Details>

      <PhotoCar source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  );
}
