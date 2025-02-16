interface ILinks {
  id: number;
  link: string;
  label: string;
}
interface INewStudent {
  name: string;
  phone: string;
  course: string;
  time: string;
}
interface INewGroup {
  name: string;
  course_id: string;
  teacher_id: string;
  price: number;
  duration: number | string;
  group_time: string;
}
interface INewStudent {
  first_name: string;
  second_name: string;
  passport_id: string;
  gender: string;
  course_id: string;
  group_id: string;
}
interface IStudent {
  id: number;
  first_name: string;
  second_name: string;
  passport_id: string;
  gender: string;
  debt: number;
  certificate_url?: string;
}
interface ISelect {
  value: string;
  label: string;
}
interface IGroup {
  id: number;
  name: string;
  code: string;
  is_group_finished: boolean;
  teacher_name: string;
  course_name: string;
  created_at: string;
  students: [];
}

interface ICourse {
  id: number;
  name: string;
  teacher: {
    id: number;
    first_name: string;
  };
  // teacher_name: string;
  created_at?: string;
  price?: number;
}

interface INewCourse {
  id?: number;
  name: string;
  price?: number;
  teacher_id: string | number;
}

interface ITeacher {
  id: string;
  first_name: string;
  second_name: string;
}

interface CreateCardProps {
  newsCard: INewsCard;
  photo: string;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
interface INewsCard {
  title: string;
  description: string;
  image: File | null;
}

interface INewPayment {
  amount: number;
  student_id: number;
  group_id: string;
}
interface IPayments {
  amount: number;
  date: string;
  status: string;
}
interface IAddStudent {
  full_name: string;
  phone: string;
  course_id: string;
  course_time: string;
}
interface IAddStudents {
  id:number;
  full_name: string;
  phone: string;
  course_time: string;
  course_name: string;
  created_at: string;
  is_attend: string;
}

interface IQueryStudent {
  is_attend: string;
  course_id?: string;
  month: string;
  course_time: string;
}

interface IOpenedGroup {
  course_name: string;
  course_time: string;
  teacher: string;
  group_time: string;
  admission_end: string;
}

interface IDebtors {
  student_id: number;
  student_full_name: string;
  group_price: string;
  group_name: string;
  teacher_name: string;
  last_payment_date: string;
  passport_id: string;
  total_paid_this_month: string;
}

interface IStats {
  active_students_count: string;
  active_groups_count: string;
  total_teachers_count: string;
  total_courses_count: string;
}

interface INews {
  id?: number;
  photo_url: string;
  news_title: string;
  news_description: string;
  content: string;
  created_at: string;
  created_time:string | null
}

interface IAnonymMessage {
  full_name: string;
  message: string;
}

interface IMessage {
  id: number;
  full_name: string;
  message: string;
  created_at: string;
}
interface IAdminLogin {
  email: string;
  password: string;
}
interface I2FAData {
  token: string;
  email?: string;
}

interface InitialStateAdmin {
  admin: null | IAdmin;
}
interface IAdmin {
  email: string;
  username: string;
  token: string;
  photo_url: string;
  expirationTime?: number;
}
