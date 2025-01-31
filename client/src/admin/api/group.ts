export async function createGroup(data: INewGroup) {
  try {
    const request = await fetch(
      //   `${import.meta.env.VITE_BACKEND_URL}api/admin/login`,
      `${import.meta.env.VITE_BACKEND_URL}group/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const response = request.json();
    return response;
    //   if (response.status !== 200) {
    //     const { message } = await response.json();
    //     throw new Error(message || "something went wrong");
    //   }
    //   const { message, admin } = await response.json();
    //   return { message, admin };
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
export async function getAllGroup() {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}group`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = request.json();
    return response;
    //   if (response.status !== 200) {
    //     const { message } = await response.json();
    //     throw new Error(message || "something went wrong");
    //   }
    //   const { message, admin } = await response.json();
    //   return { message, admin };
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
// get a group
export async function getGroup(id: string) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}group/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = request.json();
    return response;
    //   if (response.status !== 200) {
    //     const { message } = await response.json();
    //     throw new Error(message || "something went wrong");
    //   }
    //   const { message, admin } = await response.json();
    //   return { message, admin };
  } catch (error: any) {
    throw new Error(error?.message || "something went wrong");
  }
}
