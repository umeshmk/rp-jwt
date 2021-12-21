import styled from 'styled-components';
import {Login} from '../components';
import {loginPageStyles, PageTitle} from './styles';

export const LoginPage = styled(({className}) => {
  return (
    <>
      <div className={className}>
        <PageTitle>Login</PageTitle>
        <Login />
      </div>
    </>
  );
})`
  ${loginPageStyles}
`;

export default LoginPage;
