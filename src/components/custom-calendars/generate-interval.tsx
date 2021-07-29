import { eachDayOfInterval, format, addDays } from 'date-fns';
import { DayProps, MarkerDatesProps } from '.';
import theme from '../../global/theme';

export function GenerateInterval(
  start: DayProps,
  end: DayProps,
): MarkerDatesProps {
  let interval: MarkerDatesProps = {};

  eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  }).forEach((value) => {
    const date = format(addDays(value, 1), 'yyy-MM-dd');

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? theme.colors.main
            : theme.colors.main_light,
        textColor:
          start.dateString === date || end.dateString === date
            ? theme.colors.main_light
            : theme.colors.main,
      },
    };
  });

  return interval;
}
