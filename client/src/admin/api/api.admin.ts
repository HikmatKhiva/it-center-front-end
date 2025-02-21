export const adminLogin = async (data: any) => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/auth/admin/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (request.status !== 200) {
      const error = await request.json();
      throw error;
    }
    const response = await request.json();
    return response;
  } catch (error) {
    throw error;
  }
};
export const adminFormData = async (token: string) => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/admin/forms`,
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
    const response = await request.json();
    return response;
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
};
export const adminVerify = async (data: any) => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/auth/admin/verify-2fa`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (request.status !== 200) {
      const error = await request.json();
      throw error;
    }
    const response = await request.json();
    return response;
  } catch (error) {
    throw error;
  }
};
export const uploadImage = async (data: FormData, token: string) => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/admin/upload-image`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: data,
      }
    );
    if (request.status !== 200) {
      const error = await request.json();
      throw error;
    }
    const response = await request.json();
    return response;
  } catch (error) {
    throw error;
  }
};
export const updateAdminProfile = async (
  data: IAdminProfile,
  token: string
) => {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}api/v1/admin/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );
    if (request.status !== 200) {
      const error = await request.json();
      throw error;
    }
    const response = await request.json();
    return response;
  } catch (error) {
    throw error;
  }
};
