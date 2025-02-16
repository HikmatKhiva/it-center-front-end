// get all course
export async function getAllCourse(token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/course`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    const response = request.json();
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
//  create a course
export async function createCourse(data: INewCourse, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/course/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    const response = request.json();
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
// update a course
export async function updateCourse(data: INewCourse, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/course/update/${data?.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    const response = request.json();
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
// delete a course
export async function deleteCourse(id: number, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/course/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    if (request.status !== 200) {
      const error = await request.json();
      throw error;
    }
    const response = request.json();
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
