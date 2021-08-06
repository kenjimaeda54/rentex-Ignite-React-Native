import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/home';
import { Scheduling } from '../screen/scheduling';
import { SchedulingDetails } from '../screen/scheduling-details';
import { Confirmation } from '../screen/confirmation';
import { CarDetails } from '../screen/car-details';
import { ListOfCars } from '../screen/list-of-cars';

const { Navigator, Screen } = createStackNavigator();

export function StackAppRoutes(): JSX.Element {
  return (
    <Navigator initialRouteName="HomeScreen">
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
      <Screen name="ListOfCars" component={ListOfCars} />
    </Navigator>
  );
}
