export const addNewStudentValidation = {
  name: (val: string) => (/^.{4,}$/.test(val) ? null : "Ism 4 kirilishi shart"),
  phone: (number: number | string) =>
    /^\+99 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(String(number))
      ? null
      : "Raqam kiriting",
  course: (val: string) =>
    /^(?!\s*$).+/.test(val) ? null : "Bu joy to'ldirilishi shart",
  time: (val: string) =>
    /^(?!\s*$).+/.test(val) ? null : "Bu joy to'ldirilishi shart",
};

export const createCourseValidation = {
  name: (value: string) =>
    value.trim().length < 3
      ? "Kurs nomi 3 ta belgidan kam bo'lishi mumkin emas"
      : null,
  price: (value = 0) =>
    value < 100000 ? "Kurs narxi 100000 dan kam bo'lishi mumkin emas" : null,
  teacher_id: (value: string) => (value ? null : "O'qituvchini tanlang"),
};
