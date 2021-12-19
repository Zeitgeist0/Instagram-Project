export default async function followUser(userID) {
  try {
    const res = await fetch(`http://localhost:5000/api/profiles/follow`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID,
      }),
    });
    return res.json();
  } catch (e) {
    console.log(e);
  }
}
