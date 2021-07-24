import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 18}px;
  padding-left: 32px;
  padding-right: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardSliderImg = styled.View`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 52px;
  padding: 0 48px;
`;
