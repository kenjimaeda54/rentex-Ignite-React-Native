/* eslint-disable react/display-name */
import React from 'react';
import CarSvg from '../assets/car_tab.svg';
import HomeSvg from '../assets/home.svg';
import PeopleSvg from '../assets/people_tab.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ListOfCars } from '../screen/list-of-cars';
import { StackAppRoutes } from './stack.routes';
import { HomeScreen } from '../screen/home';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();
//quando for trabalhar com nesting de rotas cuidado com as dependências,
//minha do Tab Navigator estava diferente em relação ao Stack navigator e o Native
export function BottomAppRoutes(): JSX.Element {
  const { colors } = useTheme();
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.background_primary,
          height: 78,
        },
        tabBarActiveTintColor: colors.main,
        tabBarInactiveTintColor: colors.text_detail,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Screen
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <HomeSvg width={24} height={24} fill={color} />
          ),
        }}
        name="HomeScreen"
        component={StackAppRoutes}
      />
      <Screen
        name="ListOfCars"
        component={ListOfCars}
        // para mudar as cores do fill no icon. Precisa o svg estar no padrão que e preto,
        // se nao estiver,vai ate o arquivo e retira o fill nas duas tags presentes
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <CarSvg width={24} height={24} fill={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color }) => (
            <PeopleSvg width={24} height={24} fill={color} />
          ),
        }}
      />
    </Navigator>
  );
}
