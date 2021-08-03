import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/home';
import { Scheduling } from '../screen/scheduling';
import { SchedulingDetails } from '../screen/scheduling-details';
import { Confirmation } from '../screen/confirmation';
import { SingUpFirstSteeps } from '../screen/sing-up/first-steeps';
import { SingUpSecondSteeps } from '../screen/sing-up/second-steeps';
import { CarDetails } from '../screen/car-details';
import { ListOfCars } from '../screen/list-of-cars';
import { SingIn } from '../screen/sing-in';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(): JSX.Element {
  return (
    <Navigator headerMode="none" initialRouteName="SingIn">
      <Screen name="SingIn" component={SingIn} />
      <Screen name="SingUpFirstSteeps" component={SingUpFirstSteeps} />
      <Screen name="SingUpSecondSteeps" component={SingUpSecondSteeps} />
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="ListOfCars" component={ListOfCars} />
    </Navigator>
  );
}
