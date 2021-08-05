import React, { ReactNode } from 'react';
import { AuthProvider } from './auth';

interface ContextProviderProps {
  children: ReactNode;
}

export function ContextProvider({
  children,
}: ContextProviderProps): JSX.Element {
  return <AuthProvider>{children}</AuthProvider>;
}
