export default function CreatePost() {
  return (
    <div>
      <div>
        <h1>記事を投稿する</h1>
        <div>
          <label htmlFor="title">タイトル</label>
          <input type="text" id="title" placeholder="タイトルを記入" />
        </div>
        <div>
          <label htmlFor="post">投稿</label>
          <textarea id="post" placeholder="投稿内容を記入" />
        </div>
        <button type="button">投稿する</button>
      </div>
    </div>
  );
}
