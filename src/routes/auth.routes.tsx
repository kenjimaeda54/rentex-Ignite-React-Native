import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Confirmation } from '../screen/confirmation';
import { SingUpFirstSteeps } from '../screen/sing-up/first-steeps';
import { SingUpSecondSteeps } from '../screen/sing-up/second-steeps';

import { SingIn } from '../screen/sing-in';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes(): JSX.Element {
  return (
    <Navigator initialRouteName="SingIn">
      <Screen name="SingIn" component={SingIn} />
      <Screen name="SingUpFirstSteeps" component={SingUpFirstSteeps} />
      <Screen name="SingUpSecondSteeps" component={SingUpSecondSteeps} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
