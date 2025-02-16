export async function getMessages({
  limit,
  offset,
  token,
}: {
  limit: number;
  offset: number;
  token: string;
}) {
  try {
    const request = await fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }api/v1/admin/messages?limit=${limit}&offset=${offset}`,
      {
        method: "GET",
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

export async function deleteMessage(id: number, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/admin/messages/${id}`,
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
