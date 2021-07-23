import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  height: ${getStatusBarHeight() + 113}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape_dark};
  padding: 28px 24px;
`;

export const HeaderContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 400;
  line-height: ${RFValue(19)}px;
  font-size: ${RFValue(15)}px;
`;
