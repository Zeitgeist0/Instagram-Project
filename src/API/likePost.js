export default async function likePost(postID) {
  try {
    const res = await fetch(`http://localhost:5000/api/posts/like`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postID,
      }),
    });
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
