import {useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {useAuth} from '../utility';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

export function Pages() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = useAuth();

  useEffect(() => {
    if (!token) {
      if (location.pathname === '/') navigate('/login');
    }
  }, [location]);

  useEffect(() => {
    localStorage.setItem('token', 'adkfjsdfsi');
  }, []);

  if (!token) {
    return (
      <>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}
