import {useContext, useEffect, useState} from 'react';
import {AuthContext, AuthContextType} from '.';

// should be used only in <App/> for context value.
// using once will maintain same state in whole app
export function useSetAuthContextValue() {
  const [auth, setAuth] = useState(false);
  const authContextValue: AuthContextType = {
    auth,
    setAuth,
  };

  useEffect(() => {
    if (localStorage.token) setAuth(true);
  }, []);

  return authContextValue;
}

// use getAuth() in child components (just a wrapper for context)
export function useGetAuth() {
  const context = useContext(AuthContext);
  return context;
}
