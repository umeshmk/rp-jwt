import {SyntheticEvent, useState} from 'react';
import {Error, Input, Submit, Success, Wrap} from './styles';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setpassword('');
  };

  const onRegister = async (e: SyntheticEvent) => {
    e.preventDefault();
    const user = {name, email, password};
    const url = 'http://localhost:3001/api/user/register';

    try {
      const res = await fetch(url, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
      });

      if (res.ok) {
        const user = await res.json();
        setSuccess(`User Registered - ${JSON.stringify(user)}`);
        setError('');
        resetForm();
      } else {
        const msg = await res.text();
        setError(`${msg}`);
        setSuccess('');
      }
    } catch (err) {
      console.log('ERROR', err);
      setError(`${err}`);
      setSuccess('');
    }
  };

  return (
    <>
      {error && <Error>{error}</Error>}
      {success && <Success>{success}</Success>}

      <Wrap>
        <form onSubmit={onRegister}>
          <div className="box">
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <Submit type="submit" value="Register" />
          </div>
        </form>
      </Wrap>
    </>
  );
}
