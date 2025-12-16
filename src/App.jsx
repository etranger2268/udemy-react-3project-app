import Main from './components/Main';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="flex w-full h-screen overflow-hidden text-base">
      <Sidebar />
      <Main />
    </div>
  );
}
