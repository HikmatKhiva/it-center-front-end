export const adminAside: INavLink[] = [
  {
    id: 1,
    title: "Bosh Sahifa",
    path: "/admin",
  },
  {
    id: 2,
    title: "Guruhlar",
    path: "/admin/group",
    children: [
      {
        id: 1,
        title: "yaratish",
        path: "/admin/group/create",
      },
    ],
  },
  {
    id: 3,
    title: "Yangiliklar",
    path: "/admin/news",
  },
];
export const genders: IGenders[] = [
  { id: 1, name: "Erkak", value: "erkak" },
  { id: 2, name: "Ayol", value: "ayol" },
];
export const columns = [
  { name: "Ismi", uid: "name" },
  { name: "Jinsi", uid: "gender" },
  { name: "Familya", uid: "surname" },
  { name: "Sozlamalar", uid: "actions" },
];
