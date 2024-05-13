// header link
interface INavLink {
  id: number;
  title: string;
  path: string;
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
  lottie?:any
}
