export async function getNewGroupList() {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/opened/group`,
      {
        method: "GET",
      }
    );
    const response = request.json();
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
export async function getCourseList() {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/list`,
      {
        method: "GET",
      }
    );
    const response = request.json();
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
export async function getNews() {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/news`,
      {
        method: "GET",
      }
    );
    const response = request.json();
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
