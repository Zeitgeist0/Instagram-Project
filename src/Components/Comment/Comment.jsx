import React from "react";

export default function Comment({ comment }) {
  const { username, avatar, text, _id } = comment;

  return (
    <div className="comment">
      <div className="comment-info">
        <p>{username}</p>
        <img src={avatar} alt="" />
      </div>

      <p>{text}</p>
    </div>
  );
}
