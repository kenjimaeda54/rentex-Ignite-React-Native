import styled, { css } from 'styled-components/native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

interface TextDateProps {
  isDate: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: ${getStatusBarHeight() + 18}px 24px;
  height: 325px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-weight: 600;
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(34)}px;
  margin-top: 41px;
`;

export const ViewContainerDate = styled.View`
  margin-top: 32px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ViewDateSelected = styled.View`
  width: 121px;
`;

export const ViewIcon = styled.View`
  width: 120px;
`;

export const TextTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  text-align: left;
  margin: 8px 0;
`;

export const TextDate = styled.Text<TextDateProps>`
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.colors.text};
  border-style: solid;

  ${({ isDate, theme }) =>
    isDate &&
    css`
      border-color: transparent;
      font-family: ${theme.fonts.inter_500};
      color: ${({ theme }) => theme.colors.background_secondary};
      font-weight: 500;
      font-size: ${RFValue(15)}px;
      line-height: ${RFValue(19)}px;
      text-align: left;
      margin-left: -5px;
    `}
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  margin-top: 33px;
  padding: 0 25px;
  width: 100%;
  flex: 1;
`;

export const Footer = styled.View`
  padding: 0 ${getBottomSpace() + 24}px;
  margin-bottom: 34px;
`;
