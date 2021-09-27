import React from "react";

const CommentPost = ({ posts }) => {
  const styles = {
    width: "80%",
    margin: "0 auto",
  };
  return (
    <div style={styles} className="card">
      <h5>Post Id : {posts.postId}</h5>
      <h5>Name : {posts.name}</h5>
      <h5>Email : {posts.email}</h5>
      <h5>Comment: {posts.body}</h5>
    </div>
  );
};

export default CommentPost;
