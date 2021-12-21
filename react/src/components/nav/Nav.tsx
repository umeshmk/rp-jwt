import styled from 'styled-components';
import {Logo, NavLink, styles, Wrap} from './styles';

export const Nav = styled(() => {
  return (
    <>
      <Wrap>
        <Logo to="/">rp-jwt</Logo>
        <div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </Wrap>
    </>
  );
})`
  ${styles}
`;
