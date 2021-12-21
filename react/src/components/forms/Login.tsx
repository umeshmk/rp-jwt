import {SyntheticEvent} from 'react';
import {Input, Submit, Wrap} from './styles';

export const Login = () => {
  const onLogin = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Wrap>
        <form onSubmit={onLogin}>
          <div className="box">
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Submit type="submit" value="Login" />
          </div>
        </form>
      </Wrap>
    </>
  );
};
