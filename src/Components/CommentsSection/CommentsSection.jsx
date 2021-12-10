import Comment from "../Comment/Comment";
import "../CommentsSection/commentsSection.scss";
import React, { useState, useEffect } from "react";
const Comments = ({ comments }) => {
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  useEffect(() => {
    if (comments.length > 1) {
      setShowMoreButton(true);
    } else {
      setShowMoreButton(false);
    }
  }, [comments.length]);
  const showMoreComments = () => {
    showAllComments ? setShowAllComments(false) : setShowAllComments(true);
  };
  return (
    <div className="comments-container">
      {showMoreButton && (
        <button className="show-more-button" onClick={showMoreComments}>
          Show more comments
        </button>
      )}

      {showAllComments ? (
        <ul className="comments-list">
          {comments.reverse().map((comment) => {
            return (
              <li className="comment" key={comment._id}>
                <Comment comment={comment} />
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="comments-list">
          <li className="comment">
            <Comment comment={comments[comments.length - 1]} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Comments;
