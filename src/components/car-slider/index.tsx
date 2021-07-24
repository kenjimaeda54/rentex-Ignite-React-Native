import React from 'react';
import { CarImg } from './style';

interface CarSliderProps {
  listImg: string[];
}

export function CarSlider({ listImg }: CarSliderProps): JSX.Element {
  return <CarImg source={{ uri: listImg[0] }} resizeMode="contain" />;
}
