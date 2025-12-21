import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center h-12 bg-amber-100 gap-11">
      <Link to="/" className="hover:text-blue-500 transition-all duration-300">
        ホーム
      </Link>
      <Link to="/create-post" className="hover:text-blue-500 transition-all duration-300">
        記事投稿
      </Link>
      <Link to="/login" className="hover:text-blue-500 transition-all duration-300">
        ログイン
      </Link>
    </nav>
  );
}
