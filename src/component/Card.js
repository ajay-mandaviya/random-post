import React from "react";
import { NavLink } from "react-router-dom";
const Card = ({ posts, style }) => {
  return (
    <div className="card" style={style}>
      <NavLink
        to={`/post/${posts?.id}`}
        exact
        style={{ color: "black", textDecoration: "none" }}
      >
        <h5>Id : {posts.id}</h5>
        <h5>
          Title : <p>{posts.title}</p>
        </h5>
        <h5>body: {posts.body}</h5>
      </NavLink>
    </div>
  );
};

export default Card;
