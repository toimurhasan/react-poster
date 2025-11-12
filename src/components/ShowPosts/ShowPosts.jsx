import { useState } from "react";
import { EditModal } from "../EditModal/EditModal";

export const ShowPosts = ({ posts, setPosts }) => {
  const [author, setAuthor] = useState(null);

  const deletePost = (i) => {
    console.log(i);
    const newArray = posts.filter(function (item, index) {
      return index !== i;
    });

    setPosts(newArray);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {posts.map((p, i) => (
          <div
            key={i}
            className="card bg-base-100 card-md border border-gray-600"
          >
            <div className="card-body">
              <p>Index number: {i}</p>
              <h2 className="card-title">Author: {p?.author}</h2>
              <p>Description: {p?.description}</p>
              <div className="card-actions">
                <button
                  className="btn btn-info"
                  onClick={() => setAuthor({ ...p, index: i })}
                >
                  Edit
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => {
                    deletePost(i);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <EditModal
        author={author}
        setAuthor={setAuthor}
        posts={posts}
        setPosts={setPosts}
      />
    </>
  );
};
