// get all course
export async function getAllTeachers(name: string, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/teachers?name=${name}`,
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
// update a teacher
export async function updateTeacher(data: ITeacher, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/teachers/${data.id}`,
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
// create a teacher
export async function createTeacher(data: ITeacher, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/teachers/create`,
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
// delete a teacher
export async function deleteTeacher(id: number, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/teachers/${id}`,
      {
        method: "DELETE",
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
