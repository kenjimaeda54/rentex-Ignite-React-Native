import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HomeScreen } from './src/screen/home';
import AppLoading from 'expo-app-loading';
import theme from './src/global/theme';
import {
  Inter_400Regular,
  Inter_500Medium,
  useFonts,
} from '@expo-google-fonts/inter';
import {
  Archivo_500Medium,
  Archivo_400Regular,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

export default function App(): JSX.Element {
  const [isLoading] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_500Medium,
    Archivo_400Regular,
    Archivo_600SemiBold,
  });

  if (!isLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}
