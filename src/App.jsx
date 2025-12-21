import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-post" element={<CreatePost />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </Router>
  );
}
