type Tab = "notes" | "my-tasks" | "created-tasks"

type TabHeader = {
  headerName: Tab,
  headerTitle: string,
}

export type {TabHeader, Tab}