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
  id:number;
  name: string;
  teacher_name: string;
  created_at: string;
  price?: number;
}

interface INewCourse {
  id?: number;
  name: string;
  price?: number;
  teacher_id: string;
}