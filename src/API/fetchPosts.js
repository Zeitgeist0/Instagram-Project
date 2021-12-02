export default async function fetchPosts() {
  try {
    let response;
    response = await fetch("http://localhost:5000/api/posts/allPosts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const posts = await response.json();
    return posts;
  } catch (err) {
    console.log(err);
  }
}
