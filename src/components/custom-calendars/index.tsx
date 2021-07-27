import React from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Container } from './styles';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Ja',
    'Fev',
    'Marc',
    'Abr',
    'Mai',
    'Junh',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nove',
    'Dez',
  ],
  dayNames: [
    'domingo',
    'segunda',
    'terçã',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
  ],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

export function CustomCalendar(): JSX.Element {
  const { colors, fonts } = useTheme();
  return (
    <Container>
      <Calendar
        renderArrow={(direction) => (
          <Feather
            color={colors.text_detail}
            size={24}
            name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          />
        )}
        headerStyle={{
          borderBottomColor: colors.text_detail,
          borderBottomWidth: 0.5,
          paddingBottom: 10,
          marginBottom: 10,
        }}
        theme={{
          monthTextColor: colors.title,
          textMonthFontWeight: '600',
          textMonthFontFamily: fonts.archivo_600,
          textMonthFontSize: 20,
          dayTextColor: colors.title,
          textDayFontWeight: '400',
          textDayFontSize: 15,
          textDayFontFamily: fonts.inter_400,
        }}
        firstDay={1}
        minDate={new Date()}
      />
    </Container>
  );
}
