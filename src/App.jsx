import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

export default function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // biome-ignore lint: "execute only the first time is is displayed"
  useEffect(() => {
    setActiveNote(sortedNotes[0]?.id ?? null);
  }, []);

  const onAddNote = () => {
    console.log('ノートが追加されました。');
    const newNote = {
      id: v4(),
      title: '新しいノート',
      content: '',
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

  const onUpdateNotes = (updatedNote) =>
    setNotes((prev) => prev.map((note) => (note.id === updatedNote.id ? updatedNote : note)));

  const sortedNotes = notes.toSorted((a, b) => b.modDate - a.modDate);

  return (
    <div className="flex w-full h-screen overflow-hidden text-base">
      <Sidebar
        notes={sortedNotes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNotes={onUpdateNotes} />
    </div>
  );
}
