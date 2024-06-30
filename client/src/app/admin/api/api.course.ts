export async function getAllCourse() {
    const response = await fetch(`http://localhost:5000/api/course`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status !== 200) {
      throw new Error("something went wrong please try again");
    }
    const courses = await response.json();
    return courses;
  }
  