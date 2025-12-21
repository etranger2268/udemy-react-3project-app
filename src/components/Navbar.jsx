import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">ホーム</Link>
      <Link to="/create-post">記事投稿</Link>
      <Link to="/login">ログイン</Link>
    </nav>
  );
}
