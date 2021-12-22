import {useEffect, useState} from 'react';
import {PageTitle, PrivateAccess} from './styles';

export const PrivatePage = () => {
  const [msg, setMsg] = useState(''); // msg from server
  const [error, setError] = useState('');
  const accessPrivateRoute = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/private', {
        method: 'get',
        headers: {
          'auth-token': localStorage.token,
        },
      });
      const msg = await res.text();
      if (res.ok) setMsg(msg);
      else setError(msg);
    } catch (err) {
      setError(JSON.stringify(err));
      console.log(err);
    }
  };

  useEffect(() => {
    accessPrivateRoute();
  }, []);

  return (
    <div>
      <PageTitle>Private Route</PageTitle>
      {msg && (
        <PrivateAccess>
          ✔ <br />
          {msg}
        </PrivateAccess>
      )}
      {error && (
        <PrivateAccess error={true}>
          ❌ <br />
          {error}
        </PrivateAccess>
      )}
    </div>
  );
};
