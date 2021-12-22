import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {useGetAuth} from '../utility';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import {PrivatePage} from './PrivatePage';
import RegisterPage from './RegisterPage';

export function Pages() {
  const navigate = useNavigate();
  const location = useLocation();
  const {auth} = useGetAuth();

  return (
    <>
      <Routes>
        {!auth && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/private" element={<PrivatePage />} />
            <Route path="*" element={<Navigate to="/login" replace={true} />} />
          </>
        )}
        {auth && (
          <>
            <Route path="/private" element={<PrivatePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />

            {/* <Navigate to="/" replace={true} /> */}
          </>
        )}
      </Routes>
    </>
  );
}
