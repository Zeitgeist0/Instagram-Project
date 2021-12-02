import React, { useEffect, useState } from "react";
import fetchPosts from "../../API/fetchPosts";
import PostsList from "../../Components/PostsList/PostsList";
export default function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then((posts) => {
      // const shuffledPosts = posts.sort((a, b) => 0.5 - Math.random());
      setPosts(posts);
    });
  }, []);
  return <div>{<PostsList posts={posts}></PostsList>}</div>;
}
