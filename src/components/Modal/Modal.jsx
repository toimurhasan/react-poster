import React, { useState } from "react";

export const Modal = ({ setPosts }) => {
  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      author: e.target.parentElement.author.value,
      description: e.target.parentElement.description.value,
    };
    setPosts(newPost);
    e.target.parentElement.reset();
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* close btn */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <h3 className="font-bold text-lg">Edit Post</h3>
          <div className="mt-2 space-y-2">
            {/* input to take author */}
            <input
              name="author"
              type="text"
              placeholder="Type Author"
              className="input w-full"
            />
            {/* input to take description */}
            <input
              name="description"
              type="text"
              placeholder="Description"
              className="input w-full"
            />
          </div>

          <button className="btn btn-success mt-2 " onClick={addPost}>
            Save
          </button>
        </form>
      </div>
    </dialog>
  );
};
