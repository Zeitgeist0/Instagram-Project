import React, { useEffect, useState } from "react";
import "./followersList.scss";
import followUser from "../../API/followUser";
export default function FollowersList({ users, title, followed }) {
  const [followButtonDisabled, setFollowButtonDisabled] = useState(false);

  const handleFollow = (userID) => {
    followUser(userID);

    setFollowButtonDisabled(true);
  };
  return (
    <>
      <h2 className="followers-list-title">{title}</h2>
      <div className="followers-container">
        <ul className="followers-list">
          {users.map((user) => {
            return (
              <li className="followers-item" key={user._id}>
                <div className="follower-info">
                  <img src={user.avatar} alt="" className="follower-avatar" />
                  <p className="follower-username">{user.username}</p>
                </div>

                <button
                  disabled={followButtonDisabled ? true : ""}
                  className="follow-button"
                  onClick={() => handleFollow(user._id)}
                >
                  {followed ? "Unfollow" : "Follow"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

FollowersList.defaultProps = {
  users: [{}],
};
