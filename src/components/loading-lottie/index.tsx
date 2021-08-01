import React from 'react';
import LottieView from 'lottie-react-native';
import loadingLottie from '../../assets/loadingLotie.json';

export function LoadingLottie(): JSX.Element {
  return (
    <LottieView
      source={loadingLottie}
      loop
      autoSize
      resizeMode="contain"
      style={{
        width: 130,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      autoPlay
    />
  );
}
