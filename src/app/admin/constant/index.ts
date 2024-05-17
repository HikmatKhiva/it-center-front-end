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
