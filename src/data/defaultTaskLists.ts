import type { TaskList } from "@/redux/slices/types";

export const DEFAULT_TASK_LISTS: TaskList[] = [
  {
    name: "Inbox",
    id: "0",
    icon: "📥",
  },
  {
    name: "Work",
    id: "1",
    icon: "💼",
  },
  {
    name: "Personal",
    id: "2",
    icon: "🏡",
  },
  {
    name: "Shopping",
    id: "3",
    icon: "🛒",
  },
];
