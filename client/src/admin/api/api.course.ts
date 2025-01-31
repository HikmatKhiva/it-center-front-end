// get all course
export async function getAllCourse() {
  try {
    const request = await fetch(`${import.meta.env.VITE_BACKEND_URL}course`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
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
// // create a course
export async function createCourse(data: INewCourse) {
  try {
    const request = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}course/create`,
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
// update a student
// export async function updateStudent(data: IStudent) {
//   try {
//     const request = await fetch(
//       `${import.meta.env.VITE_BACKEND_URL}student/${data?.id}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     const response = request.json();
//     return response;
//   } catch (error: any) {
//     throw new Error(error?.message || "something went wrong");
//   }
// }
// delete a student
// export async function deleteStudent(id: number) {
//   try {
//     const request = await fetch(
//       `${import.meta.env.VITE_BACKEND_URL}student/${id}`,
//       {
//         method: "DELETE",
//       }
//     );
//     const response = request.json();
//     return response;
//   } catch (error: any) {
//     throw new Error(error?.message || "something went wrong");
//   }
// }
