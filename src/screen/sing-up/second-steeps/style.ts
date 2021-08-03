import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 0 32px;
  width: 100%;
`;

export const Header = styled.View`
  margin-top: ${getStatusBarHeight() + 37}px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const IconView = styled.View``;

export const Content = styled.View`
  margin-top: 48px;
  margin-bottom: 64px;
`;

export const TitleHeader = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text_Dark};
  line-height: ${RFValue(40)}px;
  font-size: ${RFValue(43)}px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
`;

export const Form = styled.View`
  margin-bottom: 16px;
`;

export const TitleForm = styled(TitleHeader)`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(21)}px;
`;

export const Footer = styled.View``;
