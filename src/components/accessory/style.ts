import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: 92px;
  width: 109px;
  margin-top: 8px;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const NameText = styled.Text`
  margin-top: 14px;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.fonts.inter_500};
  font-weight: 500;
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
`;
