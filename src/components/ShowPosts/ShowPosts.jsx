import React from "react";

export const ShowPosts = ({ posts }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mt-8">
        {posts.map((p) => (
          <div className="card bg-base-100 card-md border border-gray-600">
            <div className="card-body">
              <h2 className="card-title">{p.author}</h2>
              <p>{p.description}</p>
              <div className="card-actions">
                <button className="btn">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
