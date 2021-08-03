import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0;
`;

export const ViewIconDone = styled.View`
  border-radius: 2px;
  border-color: ${({ theme }) => theme.colors.shape_dark};
  border-style: solid;
  padding: 14px;
  margin-bottom: 46px;
`;

export const TitleText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  font-weight: 600;
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
  margin-bottom: 16px;
`;

export const DescriptionText = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.inter_400};
  font-weight: 400;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.text_detail};
  margin-bottom: 80px;
`;

export const Footer = styled.View`
  margin-bottom: ${getBottomSpace() + 80}px;
`;
