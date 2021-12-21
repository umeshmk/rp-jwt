import {BrowserRouter} from 'react-router-dom';
import {Nav} from './components';
import {Pages} from './pages';
import {AuthContext, useSetAuthContextValue} from './utility';
import {useCheckToken} from './utility/useCheckToken';

function App() {
  const value = useSetAuthContextValue();
  useCheckToken();

  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Nav />
        <Pages />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
