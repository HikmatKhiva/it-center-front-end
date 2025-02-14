export const addNewStudentValidation = {
  full_name: (val: string) =>
    /^.{4,}$/?.test(val) ? null : "Ism 4 kirilishi shart",
  phone: (number: number | string) =>
    /^\+99 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(String(number))
      ? null
      : "Raqam kiriting",
  course_id: (val: string) =>
    /^(?!\s*$).+/.test(val) ? null : "Bu joy to'ldirilishi shart",
  course_time: (val: string) =>
    /^(?!\s*$).+/?.test(val) ? null : "Bu joy to'ldirilishi shart",
};
export const anonymMessageValidation = {
  full_name: (val: string) =>
    /^.{4,}$/.test(val) ? null : "Ism kiritlishi shart",
  message: (val: string) =>
    /^.{4,}$/.test(val) ? null : "Xabar kiritlishi shart",
};

export const createCourseValidation = {
  name: (value: string) =>
    value.trim().length < 3
      ? "Kurs nomi 3 ta belgidan kam bo'lishi mumkin emas"
      : null,
  price: (value = 0) =>
    value < 100000 ? "Kurs narxi 100000 dan kam bo'lishi mumkin emas" : null,
  teacher_id: (value: string | number) =>
    value ? null : "O'qituvchini tanlang",
  group_time: (value: string) =>
    value?.trim()?.length < 0 ? "Guruh vaqtini belgilash kerak." : null,
};

export const createGroupValidation = {
  name: (value: string) =>
    value.trim().length <= 3 ? "Guruh nomi 3 harfdan kam bo'lmasin!" : null,
  duration: (value: number) =>
    parseInt(value.toString()) > 10 ? "10 dan katta bo'lmasin!" : null,
  price: (value: number) =>
    value < 100000 ? "To'lov puli 100000 kam bo'lmasin!" : null,
  course_id: (value: string) => (!value ? "Kursni tanlash shart!" : null),
  teacher_id: (value: string) =>
    !value ? "O'qituvchini tanlash shart!" : null,
};

export const createPaymentValidation = {
  amount: (number: number) =>
    number <= 0 ? "Summani to'g'ri kiriting!" : null,
  student_id: (id: number) =>
    typeof id === "undefined" ? "Ma'lumot to'liq emas!" : null,
  group_id: (id: string) =>
    typeof id === "undefined" ? "Ma'lumot to'liq emas!" : null,
};

export const adminValidation = {
  email: (val: string) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
  password: (val: string) =>
    val?.length <= 6 ? "Password should include at least 6 characters" : null,
};

export const studentValidation = {
  first_name: (value: string) => {
    if (!value) return "Ism bo'lishi shart!";
    if (typeof value !== "string") return "Ismni harflar bilan kiriting!";
    if (value?.length <= 3) return "Ismni harflar 3 dan ko'p bo'lishi kerak!";
    return null;
  },
  second_name: (value: string) => {
    if (!value) return "Familiya bo'lishi shart!";
    if (typeof value !== "string") return "Familiya harflar bilan kiriting!";
    if (value?.length <= 3)
      return "Familiya harflar 3 dan ko'p bo'lishi kerak!";
    return null;
  },
  passport_id: (value: string) =>
    value?.length < 9
      ? "Passport id uzunligi 9 katta bo'lmasligi kerak."
      : null,
  gender: (value: string) =>
    !["male", "female"].includes(value) ? "Iltimos jinsni tanlang" : null,
};
export const tokenValidation = {
  token: (token:string) =>
    !/^\d*$/.test(token)
      ? "Iltmos faqat raqam kiriting"
      : token?.length !== 6
      ? "Code to'liq kiriting"
      : null,
};
