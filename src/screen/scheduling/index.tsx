import React from 'react';
import { BackButton } from '../../components/back-button';
import { useTheme } from 'styled-components/native';
import { Button } from '../../components/button';
import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  Title,
  ViewContainerDate,
  ViewDateSelected,
  ViewIcon,
  TextTitle,
  TextDate,
  Content,
  Footer,
} from './style';
import Arrow from '../../assets/arrow.svg';

export function Scheduling(): JSX.Element {
  const { colors } = useTheme();
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header>
        <BackButton colorProps={colors.background_primary} />
        <Title>
          Escolha uma{'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>
        <ViewContainerDate>
          <ViewDateSelected>
            <TextTitle>De</TextTitle>
            <TextDate isDate={true}> 18/06/2021 </TextDate>
          </ViewDateSelected>
          <ViewIcon>
            <Arrow height={10} width={48} />
          </ViewIcon>
          <ViewDateSelected>
            <TextTitle>Ate</TextTitle>
            <TextDate isDate={false}> </TextDate>
          </ViewDateSelected>
        </ViewContainerDate>
      </Header>
      <Content></Content>
      <Footer>
        <Button description="Confirmar" />
      </Footer>
    </Container>
  );
}