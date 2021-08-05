import React, { Fragment, useRef, useState } from 'react';
import { ViewToken, FlatList } from 'react-native';
import { ViewSlider } from '../view-slider';
import { CarImg, ImgWrap } from './style';

interface CarSliderProps {
  listImg: {
    id: string;
    photo: string;
  }[];
}

interface ViewSliderProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

/*método contain e bom para garantir que a imagem vai tentar couber dentro de uma view,
exemplo casso de uso, quando houver algum corte na imagem, por que a view e menor */
export function CarSlider({ listImg }: CarSliderProps): JSX.Element {
  const [indexImg, setIndexImg] = useState(0);

  const handleVIew = useRef((info: ViewSliderProps) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const index = info.viewableItems[0].index!;
    //estou usando viewableItems[0] para garantir que apenas quero a posição atual
    //tipagem selecionada para ViewSliderProps, recomendada pelo componente
    //onViewableItemsChanged,para saber apenas passa o mouse acima
    setIndexImg(index);
  });

  return (
    <Fragment>
      <ViewSlider numberSelected={indexImg} listImg={listImg} />
      <FlatList
        data={listImg}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          //as vezes colocar uma view em torno auxilia na estilização
          <ImgWrap>
            <CarImg source={{ uri: item.photo }} resizeMode="contain" />
          </ImgWrap>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingRight: 47,
        }}
        onViewableItemsChanged={handleVIew.current}
      />
    </Fragment>
  );
}
