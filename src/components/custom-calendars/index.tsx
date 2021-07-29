import React from 'react';
import {
  Calendar,
  LocaleConfig,
  DateCallbackHandler,
} from 'react-native-calendars';
import { Container } from './styles';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { ptBr } from './local-config';
import { getIntervalDays } from './generate-interval';

LocaleConfig.locales['pt-br'] = ptBr;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkerDatesProps {
  [date: string]: {
    textColor: string;
    color: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
}

interface DayProps {
  day: number;
  month: number;
  year: number;
  timestamp: number;
  dateString: string;
}

interface CalendarProps {
  markedDates: MarkerDatesProps;
  onDayPress: DateCallbackHandler;
}

function CustomCalendar({
  markedDates,
  onDayPress,
}: CalendarProps): JSX.Element {
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
        //dia 1 e para calendário iniciar em segunda,esta assim no design do figma
        firstDay={1}
        minDate={new Date()}
        markedDates={markedDates} //isto e um array correspondente ao marKingType
        markingType="period"
        onDayPress={onDayPress} //dia selecionado
      />
    </Container>
  );
}

export {
  DayProps,
  CalendarProps,
  CustomCalendar,
  MarkerDatesProps,
  getIntervalDays,
};
