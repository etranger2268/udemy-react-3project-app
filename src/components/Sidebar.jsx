export default function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {
  return (
    <div className="w-3/10 h-screen border-r border-gray-200">
      <div className="flex justify-between p-6">
        <h1 className="m-0 font-black text-3xl">ノート</h1>
        <button
          type="button"
          onClick={onAddNote}
          className="border-none bg-none text-blue-400 m-0 p-0 text-base cursor-pointer"
        >
          追加
        </button>
      </div>
      <div className="h-[calc(100vh-78px)] overflow-scroll">
        {notes.map((note) => (
          <button
            type="button"
            key={note.id}
            className={`w-full text-left p-6 cursor-pointer transition-all hover:bg-gray-100 ${
              note.id === activeNote && 'bg-gray-100'
            }`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="flex justify-between">
              <strong>{note.title}</strong>
              <button
                type="button"
                className="border-none bg-none text-blue-400 m-0 p-0 text-base cursor-pointer"
                onClick={() => onDeleteNote(note.id)}
              >
                削除
              </button>
            </div>
            <p className="my-2.5 mx-0">{note.content}</p>
            <small className="text-gray-500">
              {new Date(note.modDate).toLocaleDateString('ja-JP', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </small>
          </button>
        ))}
      </div>
    </div>
  );
}
