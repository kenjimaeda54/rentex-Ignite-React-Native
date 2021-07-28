import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

export function Loading(): JSX.Element {
  const { colors } = useTheme();
  return (
    <ActivityIndicator
      color={colors.success}
      size="large"
      style={{
        flex: 1,
      }}
    />
  );
}
