export default function Sidebar() {
  return (
    <div className="w-3/10 h-screen border-r border-gray-200">
      <div className="flex justify-between p-6">
        <h1 className="m-0 font-black text-3xl">ノート</h1>
        <button
          type="button"
          className="border-none bg-none text-blue-400 m-0 p-0 text-base cursor-pointer"
        >
          追加
        </button>
      </div>
      <div className="h-[calc(100vh-78px)] overflow-scroll">
        <div className="p-6 cursor-pointer transition-all hover:bg-gray-100">
          <div className="flex justify-between">
            <strong>タイトル</strong>
            <button
              type="button"
              className="border-none bg-none text-blue-400 m-0 p-0 text-base cursor-pointer"
            >
              削除
            </button>
          </div>
          <p className="my-2.5 mx-0">ノートの内容です。</p>
          <small className="text-gray-500">最後の修正日:xx/xx</small>
        </div>
      </div>
    </div>
  );
}
