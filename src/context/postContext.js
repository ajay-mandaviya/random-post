import React, { createContext, useState, useEffect } from "react";
import { getAllPosts } from "../api/post.api";
export const PostDataContext = createContext();

const PostContextProvider = (props) => {
  const [post, setPost] = useState([]);
  const fetchPost = async () => {
    const data = await getAllPosts();
    setPost(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <PostDataContext.Provider value={{ post }}>
      {props.children}
    </PostDataContext.Provider>
  );
};

export default PostContextProvider;
