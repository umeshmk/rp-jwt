import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

export const styles = css``;

export const Wrap = styled.div`
  display: flex;
  background-color: antiquewhite;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  color: gray;
  font-size: 2rem;
  font-weight: 700;
  text-decoration: none;
`;

export const NavLink = styled(Link)`
  font-size: 1.4rem;
  padding-left: 1rem;
  text-decoration: none;
  color: darkorchid;
`;
