import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentPost from "./CommentPost";
import Card from "./Card";
import { getAllComments, getPostbyId } from "../api/post.api";
const Comment = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const fetchCommet = async () => {
    const result = await getAllComments(id);
    setData(result);
  };
  const fetchPost = async () => {
    const result = await getPostbyId(id);
    setPost(result);
  };

  useEffect(() => {
    fetchCommet();
    fetchPost();
  }, []);

  const styles = {
    width: "80%",
    margin: "0 auto",
  };
  return (
    <div className="post">
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>Post</h1>

      <Card posts={post} style={styles} />
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Comments
      </h1>
      <div>
        {data &&
          data.map((posts, index) => {
            return <CommentPost key={index} posts={posts}></CommentPost>;
          })}
      </div>
    </div>
  );
};

export default Comment;
