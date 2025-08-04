type SidebarLink = {
  title: string,
  path: string,
  icon: string,
}

const getSidebarLinks = (): SidebarLink[] => ([
  {
    title: "Профиль",
    path: "/adminpanel/profile",
    icon: "icon icon-people",
  },
  {
    title: "Клиент-рассылка",
    path: "/adminpanel/mailing",
    icon: "icon icon-mail",
  },
  {
    title: "Статистика",
    path: "/adminpanel/statistic",
    icon: "icon icon-time",
  },
  {
    title: "Объявления",
    path: "/adminpanel/advertisement",
    icon: "icon icon-message",
  },
  {
    title: "Пользователи",
    path: "/adminpanel/users",
    icon: "icon icon-emoji",
  },
  {
    title: "В приложение",
    path: "/",
    icon: "icon icon-apps",
  }
]);

export default getSidebarLinks