import React, { useState, useContext, createContext, ReactNode } from 'react';
import { api } from '../services';

interface User {
  id: string;
  name: string;
  avatar: string;
  driver_license: string;
  email: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface SingCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  // eslint-disable-next-line no-unused-vars
  singIn: (credentials: SingCredentials) => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthProvider({
  children,
}: AuthProviderProps): JSX.Element {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function singIn({ email, password }: SingCredentials) {
    const { data } = await api.post('/sessions', {
      email,
      password,
    });
    setData(data);
  }

  return (
    <AuthContext.Provider value={{ user: data.user, singIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}

export { useAuthContext, AuthProvider };
