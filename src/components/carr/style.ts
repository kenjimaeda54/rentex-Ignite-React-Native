import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 150px;
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const Details = styled.View``;

export const TextBrandCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  font-weight: 500;
  line-height: ${RFValue(11)}px;
  letter-spacing: 4px;
  margin: 4px 0;
  text-transform: uppercase;
`;

export const TextModelCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
  font-weight: 500;
  line-height: ${RFValue(16)}px;
`;

export const ViewDiary = styled.View`
  margin-top: 16px;
  width: 105px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContentDiary = styled.View``;

export const TextDay = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
  font-weight: 500;
  line-height: ${RFValue(10)}px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 4px 0;
`;

export const TextPrice = styled.Text`
  font-family: ${({ theme }) => theme.fonts.archivo_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(15)}px;
  font-weight: 500;
  line-height: ${RFValue(16)}px;
  text-transform: uppercase;
`;

export const Type = styled.View``;

export const PhotoCar = styled.Image`
  width: 160px;
  height: 92px;
`;
