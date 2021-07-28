import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ButtonConfirm from '../../components/button-confirm';
import Logo from '../../assets/logo_background_gray.svg';
import Done from '../../assets/done.svg';
import {
  Container,
  Content,
  TitleText,
  DescriptionText,
  ViewIconDone,
  Footer,
} from './style';

export function SchedulingComplete(): JSX.Element {
  const { width } = useWindowDimensions();
  //em  componente funcional precisa ser o Dimensions ao invés do hook useWindowDDimensions, por exemplo
  //no styled componente. Com useDimensions pego exatamente a proporção do dispositivo
  //que esta sendo usado
  const navigation = useNavigation();

  function handleHomeScreen() {
    navigation.navigate('HomeScreen');
  }
  return (
    <Container>
      <Logo width={width} />
      <Content>
        <ViewIconDone>
          <Done width={60} height={66} />
        </ViewIconDone>
        <TitleText>Carro Alugado</TitleText>
        <DescriptionText>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </DescriptionText>
      </Content>
      <Footer>
        <ButtonConfirm title="Ok" onPress={handleHomeScreen} />
      </Footer>
    </Container>
  );
}