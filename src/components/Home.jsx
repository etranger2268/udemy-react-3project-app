import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebase';

export default function Home() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, 'posts'));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  return (
    <div className="w-full h-auto flex items-center flex-col p-5">
      {postList.map((post) => (
        <div
          key={post.id}
          className="w-150 h-auto max-h-150 bg-white shadow-xl m-5 p-5 rounded-lg space-y-3"
        >
          <h1 className="text-2xl text-center font-black mt-1.5">{post.title}</h1>
          <div className="h-auto wrap-break-word max-h-100 w-full">{post.content}</div>
          <div className="flex items-center justify-between mt-4">
            <h3 className="font-semibold">@{post.author.username}</h3>
            <button
              type="button"
              className="bg-blue-400 py-0.5 px-2 text-white transition-all duration-300 hover:bg-blue-500"
            >
              削除
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
