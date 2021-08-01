import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ImgWrap = styled.View`
  width: ${Dimensions.get('window').width}px;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 132px;
`;

export const CarImg = styled.Image`
  width: 100%;
  height: 132px;
`;
