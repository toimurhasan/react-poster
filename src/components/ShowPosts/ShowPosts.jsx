import React from "react";

export const ShowPosts = ({ posts }) => {
  console.log(posts);
  return (
    <>
      {{
        if(posts.length){
            posts.map((post) => (
        <li>{post.author}</li>
      ))
        }
      }}
    </>
  );
};
