import type dayjs from "dayjs";

interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  deadline?: dayjs.Dayjs;
  importance: "low" | "medium" | "high";
}

export interface TaskList {
  id: string;
  name: string;
  icon: string;
  tasks: Task[];
}
