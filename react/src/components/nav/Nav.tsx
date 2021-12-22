import styled from 'styled-components';
import {useGetAuth} from '../../utility';
import {Logo, NavLink, styles, Wrap} from './styles';

export const Nav = styled(() => {
  const {auth, setAuth} = useGetAuth();

  const logout = () => {
    localStorage.clear();
    setAuth(false);
  };

  return (
    <>
      <Wrap>
        <Logo to="/">rp-jwt</Logo>
        <div>
          {!auth && (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          )}
          {auth && (
            <>
              <NavLink to="/" onClick={logout}>
                Logout
              </NavLink>
            </>
          )}
          <NavLink to="/private">Private</NavLink>
        </div>
      </Wrap>
    </>
  );
})`
  ${styles}
`;
