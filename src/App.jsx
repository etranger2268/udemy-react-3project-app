import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';

export default function App() {
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('isAuth')) || false);
  return (
    <Router>
      <Navbar isAuth={isAuth} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-post" element={<CreatePost isAuth={isAuth} />}></Route>
        <Route path="/login" element={<Login isAuth={isAuth} setIsAuth={setIsAuth} />}></Route>
        <Route path="/logout" element={<Logout isAuth={isAuth} setIsAuth={setIsAuth} />}></Route>
      </Routes>
    </Router>
  );
}
