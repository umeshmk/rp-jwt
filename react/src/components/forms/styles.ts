import styled, {css} from 'styled-components';

export const styles = css``;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  .box {
    display: flex;
    padding: 3rem;
    flex-direction: column;
    background-color: antiquewhite;
  }
`;

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid;
`;

export const Submit = styled.input`
  background-color: bisque;
  font-size: 1.2rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid;
  cursor: pointer;
  margin-top: 1rem;
`;

export const Success = styled.p`
  color: green;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
`;
export const Error = styled.p`
  color: crimson;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
`;
