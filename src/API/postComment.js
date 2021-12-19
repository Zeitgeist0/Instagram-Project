export default async function postComment(postID , text) {
    try {
      const res = await fetch(`http://localhost:5000/api/comments/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postID,
          text
        }),
      });
      return res.json();
    } catch (e) {
      console.log(e);
    }
  }
  