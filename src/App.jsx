import React, { useState } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Modal } from "./components/Modal/Modal";
import { ShowPosts } from "./components/ShowPosts/ShowPosts";

export const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Modal setPosts={setPosts} posts={posts} />
      <ShowPosts posts={posts} />
    </div>
  );
};
