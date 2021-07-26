import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Container, NameText } from './style';

interface AccessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

export function Accessory({ name, icon: Icon }: AccessoryProps): JSX.Element {
  return (
    <Container>
      <Icon width={28} height={28} />
      <NameText>{name}</NameText>
    </Container>
  );
}
