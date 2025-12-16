export default function Sidebar() {
  return (
    <div>
      <div>
        <h1>ノート</h1>
        <button type="button">追加</button>
      </div>
      <div>
        <div>
          <div>
            <strong>タイトル</strong>
            <button type="button">削除</button>
          </div>
          <p>ノートの内容です。</p>
          <small>最後の修正日:xx/xx</small>
        </div>
      </div>
    </div>
  );
}
