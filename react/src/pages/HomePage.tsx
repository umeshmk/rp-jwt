import styled from 'styled-components';

const HomePage = styled(({className}) => {
  const token = localStorage.token;

  return (
    <>
      <div className={className}>
        <h1>You are Logged in</h1>
        <h4>localStorage.token</h4>
        <code>{token}</code>
        <p>Try refreshing page or closing browsers</p>
      </div>
    </>
  );
})`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 50vw;
  margin: 0 auto;
  margin-top: 6rem;

  * {
    margin-top: 2rem;
  }
  code {
    overflow-wrap: break-word;
  }
`;

export default HomePage;
