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
  padding: 0 48px;
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

export const Accessories = styled.View`
  margin-top: 16px;
  margin-bottom: 24px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.colors.background_primary};
  width: 100%;
  padding: 31px 24px ${getBottomSpace() + 31}px;
`;

export const ViewRetail = styled.View`
  margin-top: 48px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.text_detail};
  border-bottom-width: 0.5px;
  padding-bottom: 21px;
  //a linha possui 21 px diferença entre os componentes melhor maneira e aplicar padding
`;

export const ViewIconCalendar = styled.View`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 14px;
`;

export const ViewDate = styled.View``;

export const TextTitle = styled.Text`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.text_detail};
  margin-bottom: 8px;
`;

export const TextDate = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_500};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(18)}px;
  letter-spacing: 2px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.title};
  margin-left: -3px;
`;

export const ViewTotal = styled.View`
  width: 100%;
  margin: 16px 0px 38px;
  justify-content: center;
`;

export const TitleTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.text_detail};
  text-transform: uppercase;
  font-weight: 500;
`;

export const ViewPrice = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const PriceTextTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_500};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

export const PriceTotalText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(26)}px;
  color: ${({ theme }) => theme.colors.success};
  font-weight: 500;
`;
