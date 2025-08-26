import type TabHeader from "@/lib/types/TabHeader";

const getTabHeaders = (): TabHeader[] => ([
  {
    headerName: "notes",
    headerTitle: "Заметки",
  },
  {
    headerName: "my-tasks",
    headerTitle: "Мои задачи",
  },
  {
    headerName: "created-tasks",
    headerTitle: "Задачи для меня",
  }
]);

export default getTabHeaders