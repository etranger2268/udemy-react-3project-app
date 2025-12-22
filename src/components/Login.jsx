import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase/firebase.js';

export default function Login({ setIsAuth }) {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button type="button" onClick={loginInWithGoogle}>
        Googleでログイン
      </button>
    </div>
  );
}
