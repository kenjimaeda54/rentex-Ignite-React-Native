import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/home';
import { Scheduling } from '../screen/scheduling';
import { SchedulingDetails } from '../screen/scheduling-details';
import { SchedulingComplete } from '../screen/scheduling-complete';
import { CarDetails } from '../screen/car-details';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes(): JSX.Element {
  return (
    <Navigator headerMode="none">
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
}
