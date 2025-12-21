import { useState } from 'react';
import { v4 } from 'uuid';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(null);
  const onAddNote = () => {
    console.log('ノートが追加されました。');
    const newNote = {
      id: v4(),
      title: '新しいノート',
      content: '新しいノートの内容',
      modDate: Date.now(),
    };

    setNotes((prev) => [...prev, newNote]);
    console.log(notes);
  };

  const onDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const getActiveNote = () => notes.find((note) => note.id === activeNote);

  return (
    <div className="flex w-full h-screen overflow-hidden text-base">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} />
    </div>
  );
}
