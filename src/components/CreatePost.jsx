import { addDoc, collection } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase/firebase.js';

export default function CreatePost({ isAuth }) {
  const initialPost = { title: '', content: '' };
  const [post, setPost] = useState(initialPost);
  const navigate = useNavigate();

  // biome-ignore lint: "execute only the first time it is displayed"
  useEffect(() => {
    if (!isAuth) navigate('/login');
  }, []);

  const handleChangePost = (key, value) =>
    setPost((prev) => ({
      ...prev,
      [key]: value,
    }));

  const handleCreatePost = async () => {
    await addDoc(collection(db, 'posts'), {
      title: post.title,
      content: post.content,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate('/');
  };

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
            value={post.title}
            onChange={(e) => handleChangePost(e.target.id, e.target.value)}
            placeholder="タイトルを記入"
            className="w-full border border-gray-300 px-1 h-7.5 outline-none"
          />
        </div>
        <div>
          <label htmlFor="content" className="block">
            投稿
          </label>
          <textarea
            id="content"
            value={post.content}
            onChange={(e) => handleChangePost(e.target.id, e.target.value)}
            placeholder="投稿内容を記入"
            className="w-full border border-gray-300 h-30 outline-none p-1.5"
          />
        </div>
        <button
          type="button"
          onClick={handleCreatePost}
          className="p-2.5 bg-blue-200 shadow-xl text-white rounded-md cursor-pointer transition-all duration-300 hover:translate-y-1 hover:shadow-none"
        >
          投稿する
        </button>
      </div>
    </div>
  );
}
