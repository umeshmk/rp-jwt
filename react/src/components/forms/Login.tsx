import {SyntheticEvent, useState} from 'react';
import {useNavigate} from 'react-router';
import {useGetAuth} from '../../utility';
import {Error, Input, Submit, Wrap} from './styles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {setAuth} = useGetAuth();

  const onLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    const user = {email, password};
    // const user = {email: 'foo@bar.com', password: '123456'};
    const url = 'http://localhost:3001/api/user/login';

    try {
      const res = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const token = await res.text();
        setError('');
        localStorage.setItem('token', token);
        setAuth(true);
        navigate('/', {replace: true});
      } else {
        const msg = await res.text();
        setError(`${msg}`);
      }
    } catch (err) {
      console.log('ERROR', err);
      setError(`${err}`);
    }
  };

  return (
    <>
      {error && <Error>{error}</Error>}

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
