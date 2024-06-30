export async function getAllGroup() {
  const response = await fetch(`http://localhost:5000/api/group`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("something went wrong please try again");
  }
  const groups = await response.json();
  return groups;
}
