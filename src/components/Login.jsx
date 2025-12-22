import { signInWithPopup } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase/firebase.js';

export default function Login({ isAuth, setIsAuth }) {
  const navigate = useNavigate();

  // biome-ignore lint: "execute only the first time it is displayed"
  useEffect(() => {
    if (isAuth) navigate('/');
  }, []);

  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
      navigate('/');
    });
  };

  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="flex flex-col justify-center shadow-xl p-5 gap-2.5">
        <p className="text-center font-bold">ログインして始める</p>
        <button
          type="button"
          className="bg-blue-400 py-0.5 px-2 text-white transition-all duration-300 hover:bg-blue-500"
          onClick={loginInWithGoogle}
        >
          Googleでログイン
        </button>
      </div>
    </div>
  );
}
