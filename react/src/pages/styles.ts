import styled, {css} from 'styled-components';

export const styles = css``;

export const loginPageStyles = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 5rem;
`;

export const PageTitle = styled.h1`
  color: brown;
  text-align: center;
  margin: 2rem;
`;

export const PrivateAccess = styled.p<{error?: boolean}>`
  color: ${(p) => (p.error ? 'crimson' : 'green')};
  text-align: center;
  font-size: 2rem;
  font-weight: 300;
`;
