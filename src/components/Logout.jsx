import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase';

export default function Logout({ isAuth, setIsAuth }) {
  const navigate = useNavigate();

  // biome-ignore lint: "execute only the first time it is displayed"
  useEffect(() => {
    if (!isAuth) navigate('/login');
  }, []);

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('isAuth');
      setIsAuth(false);
      navigate('/login');
    });
  };


  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="flex flex-col justify-center shadow-xl p-5 gap-2.5">
        <p className="text-center font-bold">ログアウトする</p>
        <button
          type="button"
          className="bg-blue-400 py-0.5 px-2 text-white transition-all duration-300 hover:bg-blue-500"
          onClick={logout}
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}
