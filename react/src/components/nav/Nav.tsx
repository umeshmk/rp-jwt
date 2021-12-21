import {useEffect} from 'react';
import styled from 'styled-components';
import {useAuth} from '../../utility';
import {Logo, NavLink, styles, Wrap} from './styles';

export const Nav = styled(() => {
  // const location = useLocation();
  const token = useAuth();

  useEffect(() => {}, []);

  const logout = () => {
    localStorage.clear();
  };

  return (
    <>
      <Wrap>
        <Logo to="/">rp-jwt</Logo>
        <div>
          {!token && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
          {token && (
            <>
              <NavLink to="/create">+Snippet</NavLink>
              <NavLink to="/" onClick={logout}>
                Logout
              </NavLink>
            </>
          )}
        </div>
      </Wrap>
    </>
  );
})`
  ${styles}
`;
