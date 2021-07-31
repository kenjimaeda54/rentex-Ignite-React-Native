import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: ${getStatusBarHeight() + 35}px 24px;
  height: 325px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_600};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-weight: 600;
  font-size: ${RFValue(30)}px;
  line-height: ${RFValue(30)}px;
  padding-top: 41px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.background_secondary};
  font-weight: 400;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(34)}px;
  padding-top: 30px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 24px 16px;
`;

export const Appointments = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AppointmentsTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.text_detail};
  font-weight: 400;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(18)}px;
`;

export const AppointmentsQuantity = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.title};
  font-weight: 500;
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(16)}px;
`;

export const WrapperCar = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 15px 24px;
  margin-bottom: 16px;
  margin-top: 2px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PeriodTex = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-weight: 500;
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(11)}px;
  text-transform: uppercase;
`;

export const ViewDate = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DateTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.title};
  font-weight: 400;
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(15)}px;
`;
