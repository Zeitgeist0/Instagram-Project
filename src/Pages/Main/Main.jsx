import React, { useEffect, useState } from "react";
import fetchPosts from "../../API/fetchPosts";
import PostsList from "../../Components/PostsList/PostsList";
import FollowersSection from "../../Components/FollowersSection/FollowersSection";
import fetchUsers from "../../API/fetchUsers";
import "./main.scss";
export default function Main() {
  const [posts, setPosts] = useState([]);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);
  const updatePosts = () => {
    fetchPosts().then((posts) => {
      // const shuffledPosts = posts.sort((a, b) => 0.5 - Math.random());
      setPosts(posts);
    });
  };

  useEffect(() => {
    fetchPosts().then((posts) => {
      // const shuffledPosts = posts.sort((a, b) => 0.5 - Math.random());
      setPosts(posts);
    });
    fetchUsers().then((users) => {
      let followed = [];
      let suggested = [];
      users.forEach((user) => {
        if (user._id === "61a4de00e2014bc8af754993") {
          return;
        } else if (user.following[0]) {
          followed.push(user);
        } else {
          suggested.push(user);
        }
      });
      setFollowedUsers(followed);
      setSuggestedUsers(suggested);
    });
  }, []);
  return (
    <div className="main-container">
      {<PostsList posts={posts} updatePosts={updatePosts}></PostsList>}
      <FollowersSection
        followedUsers={followedUsers}
        suggestedUsers={suggestedUsers}
      >
        {" "}
      </FollowersSection>
    </div>
  );
}
