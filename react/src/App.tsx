import {BrowserRouter} from 'react-router-dom';
import {Nav} from './components';
import {Pages} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
