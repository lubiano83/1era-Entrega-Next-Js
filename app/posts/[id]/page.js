const getPostsById = async (id) => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);

    if(!response.ok){
        throw new Error(`Error en obtener el post`);
    }

    return response.json();
};

const PostDetail = async ({ params }) => {

    const { id } = params;
    const post = await getPostsById(id);

    return (
        <div className="container w-auto max-w-md">
            <h2 className="text-2xl">{post.title}</h2>
            <hr/>
            <p>{post.body}</p>
        </div>
    )
}; export default PostDetail;