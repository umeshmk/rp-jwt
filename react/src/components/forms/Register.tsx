import {SyntheticEvent} from 'react';
import {Input, Submit, Wrap} from './styles';

export function Register() {
  const onRegister = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Wrap>
        <form onSubmit={onRegister}>
          <div className="box">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Submit type="submit" value="Register" />
          </div>
        </form>
      </Wrap>
    </>
  );
}
