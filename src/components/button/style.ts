import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps {
  color?: string;
}

export const ButtonContainer = styled(RectButton)<ButtonProps>`
  background-color: ${({ color, theme }) =>
    color ? color : theme.colors.main};
  padding: 19px 0;
  width: 100%;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_500};
  font-weight: 500;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.background_secondary};
  text-align: center;
`;

export const FooterLoading = styled.View`
  padding: 9px 0;
  justify-content: center;
  align-items: center;
`;
