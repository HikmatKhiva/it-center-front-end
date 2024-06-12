// header link
interface INavLink {
  id: number;
  title: string;
  path: string;
  children?: INavLink[];
}
interface ICourses {
  id: number;
  name: string;
  value: string;
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
