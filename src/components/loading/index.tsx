import React from 'react';
import { ActivityIndicator, ActivityIndicatorIOSProps } from 'react-native';
import { useTheme } from 'styled-components';

interface LoadingProps extends ActivityIndicatorIOSProps {
  color?: string;
}

export function Loading({ color, ...rest }: LoadingProps): JSX.Element {
  const { colors } = useTheme();
  return (
    <ActivityIndicator
      {...rest}
      color={color ? color : colors.success}
      size="large"
      style={{
        flex: 1,
      }}
    />
  );
}
