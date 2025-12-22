import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

export default function Logout({ setIsAuth }) {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('isAuth');
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button type="button" onClick={logout}>
        ログアウト
      </button>
    </div>
  );
}
