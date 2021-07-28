import { SvgProps } from 'react-native-svg';
import Gasoline from '../assets/gasoline.svg';
import People from '../assets/people.svg';
import Force from '../assets/force.svg';
import Acceleration from '../assets/acceleration.svg';
import Exchange from '../assets/exchange.svg';
import Speed from '../assets/speed.svg';
import Hybrid from '../assets/hybrid.svg';
import Electric from '../assets/energy.svg';
import Car from '../assets/car.svg';

export function getIcons(params: string): string | React.FC<SvgProps> {
  const types = {
    electric_motor: Electric,
    electric: Electric,
    gasoline_motor: Gasoline,
    speed: Speed,
    acceleration: Acceleration,
    exchange: Exchange,
    hybrid_motor: Hybrid,
    seats: People,
    turning_diameter: Force,
  } as unknown as string;
  function typeIcons(icon: any) {
    return types[icon] ? types[icon] : (Car as React.FC<SvgProps>);
  }
  return typeIcons(params);
}
