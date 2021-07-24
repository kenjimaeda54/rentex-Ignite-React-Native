import styled from 'styled-components/native';

interface ViewSelectedProps {
  isSelect: boolean;
}

export const Container = styled.View`
  flex-direction: row;
`;

export const ViewSelected = styled.View<ViewSelectedProps>`
  width: 6px;
  height: 6px;
  margin: 0 8px;
  border-radius: 3px;
  background-color: ${({ theme, isSelect }) =>
    isSelect ? theme.colors.title : theme.colors.shape};
`;
