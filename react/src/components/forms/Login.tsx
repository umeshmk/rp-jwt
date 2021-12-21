import {SyntheticEvent, useState} from 'react';
import {Input, Submit, Wrap} from './styles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');

  const onLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log({email, password});
  };

  return (
    <>
      <Wrap>
        <form onSubmit={onLogin}>
          <div className="box">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <Submit type="submit" value="Login" />
          </div>
        </form>
      </Wrap>
    </>
  );
};
