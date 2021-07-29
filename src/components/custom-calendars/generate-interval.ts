import { eachDayOfInterval, format, addDays } from 'date-fns';
import { DayProps, MarkerDatesProps } from '.';
import theme from '../../global/theme';

export function getIntervalDays(
  start: DayProps,
  end: DayProps,
): MarkerDatesProps {
  let interval: MarkerDatesProps = {};

  //em eachDaysOfInterval vou construir uma data no formato UTF
  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((value) => {
    //se nao funcionar perfeitamente verificar a data que esta retornando na função
    //eachDaysOfInterval,coloque o addDays,para somar um dia,porque ao clicar no calendário
    //dia 9 retornava 8
    const date = format(addDays(value, 1), 'yyy-MM-dd');

    interval = {
      ...interval,
      [date]: {
        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
      },
    };
  });
  return interval;
}
