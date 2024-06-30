export async function getUsers(id: string | undefined) {
  const response = await fetch(`http://localhost:5000/api/users/?q${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("something went wrong please try again");
  }
  const users = await response.json();
  return users;
}
