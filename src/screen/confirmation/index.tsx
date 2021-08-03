import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
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

interface ParamsProps {
  title: string;
  description: string;
  nextScreen: string;
}

export function Confirmation(): JSX.Element {
  const { width } = useWindowDimensions();
  //em  componente funcional precisa ser o Dimensions ao invés do hook useWindowDDimensions, por exemplo
  //no styled componente. Com useDimensions pego exatamente a proporção do dispositivo
  //que esta sendo usado
  const navigation = useNavigation();
  const { params } = useRoute();
  const { title, description, nextScreen } = params as ParamsProps;

  function handleHomeScreen() {
    navigation.navigate(nextScreen);
  }
  return (
    <Container>
      <Logo width={width} />
      <Content>
        <ViewIconDone>
          <Done width={60} height={66} />
        </ViewIconDone>
        <TitleText>{title}</TitleText>
        <DescriptionText>{description}</DescriptionText>
      </Content>
      <Footer>
        <ButtonConfirm title="Ok" onPress={handleHomeScreen} />
      </Footer>
    </Container>
  );
}
