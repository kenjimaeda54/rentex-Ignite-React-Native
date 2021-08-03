import React from 'react';
import { ViewSelected } from './style';

interface BulletProps {
  isSelect?: boolean;
}

export function Bullet({ isSelect = false }: BulletProps): JSX.Element {
  return <ViewSelected isSelect={isSelect} />;
}
