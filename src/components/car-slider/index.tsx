import React from 'react';
import { CarImg } from './style';

interface CarSliderProps {
  listImg: string[];
}

/*método contain e bom para garantir que a imagem vai tentar couber dentro de uma view,
exemplo casso de uso, quando houver algum corte na imagem, por que a view e menor */
export function CarSlider({ listImg }: CarSliderProps): JSX.Element {
  return <CarImg source={{ uri: listImg[0] }} resizeMode="contain" />;
}
