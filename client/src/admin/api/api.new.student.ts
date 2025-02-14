// get all students
export async function getAllNewStudents({
  queryData,
  limit,
  offset,
  token,
}: {
  queryData: IQueryStudent;
  limit: number;
  offset: number;
  token: string;
}) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/admin/newStudents?is_attend=${
        queryData?.is_attend
      }&month=${queryData.month}&course_time=${
        queryData.course_time
      }&limit=${limit}&offset=${offset}`,
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

export const updateNewStudentStatus = async (
  id: number,
  status: string,
  token: string
) => {
  try {
    const request = await fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }api/v1/admin/newStudents/update/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ status }),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await request.json();
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
};
export const deleteNewStudentStatus = async (id: number, token: string) => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/admin/newStudents/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await request.json();
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
};
