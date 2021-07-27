import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 80px;
  padding: 19px;
  background-color: ${({ theme }) => theme.colors.shape_dark};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_500};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
`;
