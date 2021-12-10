import React from "react";
import "../Comment/comment.scss";
export default function Comment({ comment }) {
  const { username, avatar, text, _id } = comment;

  return (
    <>
      {comment.hasOwnProperty("username") && (
        <div>
          <div className="comment-info">
            <img className="comment-avatar" src={avatar} alt="" />
            <p>{username}</p>
          </div>

          <p className="comment-caption">{text}</p>
        </div>
      )}
    </>
  );
}

Comment.defaultProps = {
  comment: {},
};
