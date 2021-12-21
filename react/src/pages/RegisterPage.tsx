import styled from 'styled-components';
import {Register} from '../components';
import {loginPageStyles, PageTitle} from './styles';

export const RegisterPage = styled(({className}) => {
  return (
    <>
      <div className={className}>
        <PageTitle>Register</PageTitle>
        <Register />
      </div>
    </>
  );
})`
  ${loginPageStyles}
`;

export default RegisterPage;
