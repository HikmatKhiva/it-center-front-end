export async function createNews(formData: FormData, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/admin/news/create`,
      {
        method: "POST",
        body: formData,
        headers: {
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
export async function updateNews(formData: FormData, token: string) {
  try {
    const request = await fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }api/v1/admin/news/update/${formData.get("id")}`,
      {
        method: "PUT",
        body: formData,
        headers: {
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
export async function getAllNews({
  limit,
  offset,
  search,
}: {
  limit: number;
  offset: number;
  search: string;
}) {
  try {
    const request = await fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }api/v1/news?limit=${limit}&offset=${offset}&search=${search}`,
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
export async function getNews(id: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/news/${id}`,
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
export async function deleteNews(id: number, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/admin/news/${id}`,
      {
        method: "DELETE",
        headers: {
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
