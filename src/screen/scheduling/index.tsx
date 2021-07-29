import React, { useState } from 'react';
import { BackButton } from '../../components/back-button';
import { useTheme } from 'styled-components/native';
import { Button } from '../../components/button';
import { StatusBar } from 'react-native';
import {
  CustomCalendar,
  DayProps,
  GenerateInterval,
  MarkerDatesProps,
} from '../../components/custom-calendars';
import { useNavigation } from '@react-navigation/native';
import Arrow from '../../assets/arrow.svg';
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

export function Scheduling(): JSX.Element {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [lastDateSelected, setLastDateSelect] = useState<DayProps>(
    {} as DayProps,
  );
  const [markDate, setMarkDate] = useState<MarkerDatesProps>(
    {} as MarkerDatesProps,
  );

  function handleSchedulingDetails() {
    navigation.navigate('SchedulingDetails');
  }

  function handleChangeDate(date: DayProps) {
    //timestamp representa a data em si,aqui estou verificando se nao possui uma data,
    let start = !lastDateSelected.timestamp ? date : lastDateSelected;
    let end = date;
    //No if vou verificar se start possui numero maior que end,porque pode ocorrer
    //do usuário primeiro clicar em uma data maior e depois clicar em um data menor.
    //Esperado e o usuário clicar na data inicial menor  e depois a  data final,
    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    setLastDateSelect(end);
    const interval = GenerateInterval(start, end);
    setMarkDate(interval);
  }

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
      <Content>
        <CustomCalendar markedDates={markDate} onDayPress={handleChangeDate} />
      </Content>
      <Footer>
        <Button description="Confirmar" onPress={handleSchedulingDetails} />
      </Footer>
    </Container>
  );
}
