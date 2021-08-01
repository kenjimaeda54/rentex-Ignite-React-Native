import React, { useState } from 'react';
import { BackButton } from '../../components/back-button';
import { useTheme } from 'styled-components/native';
import { Button } from '../../components/button';
import { StatusBar } from 'react-native';
import { addDays, format } from 'date-fns';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dots } from '../../components/dots';
import Arrow from '../../assets/arrow.svg';
import {
  CustomCalendar,
  DayProps,
  getIntervalDays,
  MarkerDatesProps,
} from '../../components/custom-calendars';
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

interface RentalPeriodProps {
  startDayFormatted: string;
  endDayFormatted: string;
}

interface RoutesProps {
  car: Dots;
}

export function Scheduling(): JSX.Element {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const { car } = useRoute().params as RoutesProps;
  const [lastDateSelected, setLastDateSelect] = useState<DayProps>(
    {} as DayProps,
  );
  const [markDate, setMarkDate] = useState<MarkerDatesProps>(
    {} as MarkerDatesProps,
  );
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>(
    {} as RentalPeriodProps,
  );

  function handleSchedulingDetails() {
    //preciso passar chaves para objeto via parâmetro,
    //car:car, date" Objet.Key()
    navigation.navigate('SchedulingDetails', {
      car,
      date: Object.keys(markDate),
    });
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastDateSelected.timestamp ? date : lastDateSelected;
    //aqui garanto que sempre vai haver uma unica data clicado no meu estado,
    //esta data sempre sera o inicio dela,porque se nao houver data meu estado vai ser date
    // se houver sera o próprio estado
    let end = date;
    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    setLastDateSelect(end);
    //função acima so estou tratando o primeiro dia clicado,sempre priorizando a data menor
    const interval = getIntervalDays(start, end);
    setMarkDate(interval);
    const startDay = Object.keys(interval)[0];
    const enDay = Object.keys(interval)[Object.keys(interval).length - 1]; //pegar todos objetos com chave final
    setRentalPeriod({
      startDayFormatted: format(addDays(new Date(startDay), 1), 'dd/MM/yy'),
      endDayFormatted: format(addDays(new Date(enDay), 1), 'dd/MM/yy'),
    });
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header>
        <BackButton
          onPress={handleGoBack}
          colorProps={colors.background_primary}
        />
        <Title>
          Escolha uma{'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>
        <ViewContainerDate>
          <ViewDateSelected>
            <TextTitle>De</TextTitle>
            <TextDate isDate={!!rentalPeriod.startDayFormatted}>
              {rentalPeriod.startDayFormatted}
            </TextDate>
          </ViewDateSelected>
          <ViewIcon>
            <Arrow height={10} width={48} />
          </ViewIcon>
          <ViewDateSelected>
            <TextTitle>Ate</TextTitle>
            <TextDate isDate={!!rentalPeriod.endDayFormatted}>
              {rentalPeriod.endDayFormatted}
            </TextDate>
          </ViewDateSelected>
        </ViewContainerDate>
      </Header>
      <Content>
        <CustomCalendar
          markedDates={markDate}
          onDayPress={handleChangeDate}
          // função onDayPress  ja recebe um date ao clicar no calendário,então nao precisou
          //informar na função
        />
      </Content>
      <Footer>
        <Button
          description="Confirmar"
          enabled={!!rentalPeriod.startDayFormatted}
          onPress={handleSchedulingDetails}
          style={{ opacity: rentalPeriod.startDayFormatted ? 1 : 0.3 }}
        />
      </Footer>
    </Container>
  );
}
