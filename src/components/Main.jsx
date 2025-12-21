export default function Main() {
  return (
    <div className="w-7/10 h-screen">
      <div className="h-[50vh] p-6">
        <input
          type="text"
          className="block border border-gray-300 mb-5 w-full p-1.5 resize-none text-xl h-12"
        />
        <textarea
          id=""
          placeholder="ノート内容を記入"
          className="block border border-gray-300 mb-5 w-full h-[calc(50vh-130px)] p-1.5 resize-none text-base"
        />
        <div className="h-[50vh] overflow-y-scroll bg-gray-50">
          <h2 className="font-black text-2xl pt-6 px-6 m-0">タイトル</h2>
          <div className="leading-8 pb-6 px-6">ノート内容</div>
        </div>
      </div>
    </div>
  );
}
