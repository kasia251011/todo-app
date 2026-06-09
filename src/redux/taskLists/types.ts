import type dayjs from "dayjs";

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  deadline?: dayjs.Dayjs;
  importance: "low" | "medium" | "high";
}

export interface TaskList extends TaskListBase {
  id: string;
  tasks: Task[];
}

export interface TaskListBase {
  name: string;
  icon: string;
}
