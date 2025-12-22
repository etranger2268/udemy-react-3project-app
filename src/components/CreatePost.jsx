export default function CreatePost() {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <div className="bg-white flex flex-col justify-center h-100 w-100 gap-2.5 py-0 px-5 shadow-xl ">
        <h1 className="text-2xl font-black m-0">記事を投稿する</h1>
        <div>
          <label htmlFor="title" className="block">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            placeholder="タイトルを記入"
            className="w-full border border-gray-300 px-1 h-7.5 outline-none"
          />
        </div>
        <div>
          <label htmlFor="post" className="block">
            投稿
          </label>
          <textarea
            id="post"
            placeholder="投稿内容を記入"
            className="w-full border border-gray-300 h-30 outline-none p-1.5"
          />
        </div>
        <button
          type="button"
          className="p-2.5 bg-blue-200 shadow-xl text-white rounded-md cursor-pointer transition-all duration-300 hover:translate-y-1 hover:shadow-none"
        >
          投稿する
        </button>
      </div>
    </div>
  );
}
