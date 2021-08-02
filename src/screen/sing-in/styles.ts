import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 115}px;
  width: 100%;
`;

export const TitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  color: ${({ theme }) => theme.colors.text_Dark};
  font-size: ${RFValue(40)}px;
  line-height: ${RFValue(43)}px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  font-weight: 400;
`;

export const FormView = styled.View`
  width: 100%;
  margin: 64px 0;
`;

export const ViewFooter = styled.View``;
