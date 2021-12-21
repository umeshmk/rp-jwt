import React from 'react';

export type AuthContextType = {
  auth: boolean;
  setAuth: (auth: boolean) => void;
};

export const defaultValue: AuthContextType = {
  auth: false,
  setAuth: (auth: boolean) => {},
};

export const AuthContext = React.createContext<AuthContextType>(defaultValue);
