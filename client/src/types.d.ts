// header link
interface INavLink {
  id: number;
  title: string;
  path: string;
  children?: INavLink[];
}
interface ICourses extends IExtends {
  id: number;
  title: string;
  teacher: string;
  createdAt: string;
}
interface IThemeMode {
  theme: "light" | "dark";
}

interface IProducts {
  title: string;
  link: string;
  thumbnail: string;
}
interface IAboutContent {
  id: number;
  title: string;
  description: string;
  lottie?: any;
}
interface ICourse {
  id: number;
  title: string;
  description: string;
  icons: any[];
}

interface INewsState {
  title: string;
  description: string;
  image: any | null;
}

interface IExtends {
  _id: string;
  __v: number;
}

interface IGroup extends IExtends {
  name: string;
  createAt: string;
  users: IUsers[];
}
interface IUsers extends IExtends {
  name: string;
  surname: string;
  gender: string;
  courseId: string;
  birth_date: string;
  createdTime: string;
  certificateId?: string;
}

interface IGenders {
  id: number;
  name: string;
  value: string;
}
// interface ICourses {

// }
