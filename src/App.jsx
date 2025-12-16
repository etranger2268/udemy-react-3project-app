import { useState } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

export default function App() {
  const [notes, setNotes] = useState([]);
  const onAddNote = () => {
    console.log('ノートが追加されました。');
    const newNote = {
      id: 1,
      title: '新しいノート',
      content: '新しいノートの内容',
      modDate: Date.now(),
    };

    setNotes((prev) => [...prev, newNote]);
    console.log(notes);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden text-base">
      <Sidebar onAddNote={onAddNote} />
      <Main />
    </div>
  );
}
