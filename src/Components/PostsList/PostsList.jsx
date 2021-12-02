import Post from "../Post/Post";
import "./postsList.scss";

const PostsList = ({ posts }) => {
  return (
    <div className="posts-container">
      <ul className="post-list">
        {posts.map((post) => {
          return (
            <li className="post-item" key={post._id}>
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostsList;
