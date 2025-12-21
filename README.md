# udemy-modern-javascipt-react-beginner

<https://www.udemy.com/course/react-3project-app-udemy/>

## 技術スタック

- [Vite](https://ja.vite.dev/)
- [React](https://ja.react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [react-router-dom](https://reactrouter.com/en/main)

## 開発

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

Firebaseを使用するには、環境変数を設定する必要があります。  
`.env.local`ファイルを作成し、以下の変数を設定してください。`.env.example`を参考にしてください。

``` code
VITE_FIREBASE_API_KEY="YOUR_API_KEY"
VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
VITE_FIREBASE_APP_ID="YOUR_APP_ID"
```

### 3. 開発サーバーの起動

Vite 開発サーバーを起動します。  
ファイルの変更を監視し、自動的にブラウザを更新します。

```bash
npm run dev
```

### 4. 本番用ビルド

```bash
npm run build
```

### 5. 本番用プレビュー

ビルドされたアプリケーションをローカルでプレビューします。  
このコマンドを実行する前に、`npm run build`を実行する必要があります。

```bash
npm run preview
```

### 6. フォーマット

[Biome](https://biomejs.dev/)を使ってコードをフォーマットします。

```bash
npm run format
```
