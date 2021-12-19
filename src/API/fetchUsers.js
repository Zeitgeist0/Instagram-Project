export default async function fetchUsers() {
  try {
    let response;
    response = await fetch("http://localhost:5000/api/profiles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const users = await response.json();
    return users;
  } catch (err) {
    console.log(err);
  }
}
