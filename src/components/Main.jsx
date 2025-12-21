export default function Main({ activeNote, onUpdateNotes }) {
  const onEditNote = (key, value) =>
    onUpdateNotes({
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    });

  if (!activeNote) {
    return (
      <div className="w-7/10 h-screen leading-[100vh] text-center text-3xl text-gray-600">
        ノートが選択されていません
      </div>
    );
  }

  return (
    <div className="w-7/10 h-screen">
      <div className="h-[50vh] p-6">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          onChange={(e) => onEditNote(e.target.id, e.target.value)}
          className="block border border-gray-300 mb-5 w-full p-1.5 resize-none text-xl h-12"
        />
        <textarea
          id="content"
          value={activeNote.content}
          onChange={(e) => onEditNote(e.target.id, e.target.value)}
          placeholder="ノート内容を記入"
          className="block border border-gray-300 mb-5 w-full h-[calc(50vh-130px)] p-1.5 resize-none text-base"
        />
        <div className="h-[50vh] overflow-y-scroll bg-gray-50">
          <h2 className="font-black text-2xl pt-6 px-6 m-0">{activeNote.title}</h2>
          <div className="leading-8 pb-6 px-6">{activeNote.content}</div>
        </div>
      </div>
    </div>
  );
}
