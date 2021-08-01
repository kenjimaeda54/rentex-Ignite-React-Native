import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
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
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24, alignItems: 'center' },
  showsVerticalScrollIndicator: false,
})``;

export const ViewCarDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

export const ViewDetails = styled.View``;

export const BrandText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-weight: 500;
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 4px 0;
`;

export const ModelText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.title};
  font-weight: 500;
  font-size: ${RFValue(25)}px;
  line-height: ${RFValue(27)}px;
`;

export const ViewRente = styled.View``;

export const DayText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-weight: 500;
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 4px 0;
`;

export const PriceText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.main};
  font-weight: 500;
  font-size: ${RFValue(25)}px;
  line-height: ${RFValue(27)}px;
`;

export const AboutText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.text_detail};
  font-weight: 400;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  margin-top: 23px;
  text-align: justify;
`;

export const Accessories = styled.View`
  margin-top: 16px;
  margin-bottom: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  width: 100%;
  padding: 31px 24px ${getBottomSpace() + 31}px;
`;
