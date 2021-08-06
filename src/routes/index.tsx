import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { useAuthContext } from '../hooks/auth';
import { BottomAppRoutes } from './tab.routes';

export function Routes(): JSX.Element {
  const { user } = useAuthContext();

  return (
    <NavigationContainer>
      {user ? <BottomAppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
