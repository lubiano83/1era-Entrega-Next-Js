import Link from 'next/link';
import React from 'react'

const getPosts = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts", {cache: "no-store",});

    if(!response.ok){
        throw new Error(`Fallo la obtencion de datos`);
    }

    return response.json();
};

const Posts = async () => {

    const Posts = await getPosts();

  return (
    <div className="bg-white flex flex-col justify-center gap-4 items-center h-full w-full text-gray-700">
        <h1>Esta es la página de Posts!!</h1>
        <ul>
            {Posts.map((post) => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                    <li className='my-4 list-disc'>
                        {post.title}
                    </li>
                </Link>
            ))}
        </ul>
    </div>
  )
}; export default Posts;
