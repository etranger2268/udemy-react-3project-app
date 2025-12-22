import { auth, provider } from '../firebase/firebase.js';

export default function Login() {
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {});
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
