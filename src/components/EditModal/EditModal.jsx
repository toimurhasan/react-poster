import { useState } from "react";

export const EditModal = ({ author, setAuthor, posts, setPosts }) => {
  const index = author?.index;
  const handleSubmit = (e) => {
    e.preventDefault();
    const author = e.target.author.value;
    const description = e.target.description.value;

    const newObj = { author, description };

    console.log(newObj, posts);

    const newArray = posts.filter((post, i) => i !== index);
    const updatedArray = [...newArray, newObj];
    setPosts(updatedArray);
    setAuthor(null);
  };

  if (author) {
    return (
      <div className="flex items-center justify-center mt-14">
        <div className="border p-6 border-gray-700 rounded-lg ">
          <h3 className="font-bold text-lg">Edit Post</h3>
          <form onSubmit={handleSubmit}>
            <div className="mt-2 space-y-2">
              {/* input to take author */}
              <input
                name="author"
                type="text"
                defaultValue={author.author}
                className="input w-full"
              />
              {/* input to take description */}
              <input
                name="description"
                type="text"
                defaultValue={author.description}
                className="input w-full"
              />
            </div>

            <button type="submit" className="btn btn-info mt-2">
              Edit
            </button>
          </form>
        </div>
      </div>
    );
  }
};
