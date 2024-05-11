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