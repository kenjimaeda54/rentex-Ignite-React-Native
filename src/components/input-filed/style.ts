import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  isFocus: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const IconView = styled.View<Props>`
  height: 56px;
  width: 56px;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  align-items: center;
  justify-content: center;
  margin-right: 2px;
  ${({ isFocus }) =>
    isFocus &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${({ theme }) => theme.colors.main};
    `}
`;

export const FieldText = styled(TextInput)<Props>`
  /* cuidado com width:100%,quando estiver trabalhando componentes internos,
  melhor opção e por flex 1, se eu colocar width 100% vai empurrar minha IconVIew,
  quebrando assim todo estilo aplicado */
  flex: 1;
  padding: 0 25px;
  margin: 8px 0;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  font-family: ${({ theme }) => theme.fonts.inter_400};
  color: ${({ theme }) => theme.colors.text_Dark};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(18)}px;
  font-weight: 400;
  height: 56px;
  ${({ isFocus }) =>
    isFocus &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${({ theme }) => theme.colors.main};
    `}
`;
