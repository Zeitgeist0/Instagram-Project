import Comment from "../Comment/Comment";

const Comments = ({ comments }) => {
  return (
    <div className="comments-container">
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li className="comment" key={comment._id}>
              <Comment comment={comment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
