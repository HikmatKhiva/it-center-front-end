import { saveAs } from "file-saver";

export async function createGroup(data: INewGroup, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/group/create`,
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
export async function getAllGroup(
  name: string = "",
  token: string,
  status?: string | boolean
) {
  try {
    const request = await fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }api/v1/group?name=${encodeURIComponent(
        name
      )}&is_group_finished=${status}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
// get a group
export async function getGroup(id: string, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/group/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
// get a group
export async function generateGroupCertificate(id: string, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/certificate/generate/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
// delete a group
export async function deleteGroup(id: number, token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/group/${id}`,
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
// get admin  stats
export async function getAdminStats(token: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/admin/stats`,
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
// download groups  certificate
export async function downloadGroupCertificate(id: number, token: string) {
  try {
    const request = await fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }api/v1/admin/download/certificate/${id}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    if (!request.ok) {
      // Handle non-2xx responses (e.g., 404, 500)
      const errorText = await request.text(); // Or response.json() if the server sends JSON errors
      throw new Error(`Download failed: ${request.status} - ${errorText}`);
    }
    const blob = await request.blob(); // Get the response as a Blob
    const contentDisposition = request.headers.get("content-disposition");
    let filename = `${id}.zip`; // Default filename

    if (contentDisposition) {
      const filenameMatch = contentDisposition.match(/filename="?([^"]*)"?/);
      if (filenameMatch && filenameMatch.length > 1) {
        filename = filenameMatch[1];
      }
    }
    saveAs(blob, filename); // Trigger the download
    return { success: true }; // Indicate successful download (optional)
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
