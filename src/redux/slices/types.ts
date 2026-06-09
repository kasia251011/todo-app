export interface Task extends TaskBase {
  id: string;
}

export interface TaskBase {
  title: string;
  description?: string;
  completed: boolean;
  deadline?: string;
  importance: "low" | "medium" | "high";
  listId: string;
}

export interface TaskList extends TaskListBase {
  id: string;
}

export interface TaskListBase {
  name: string;
  icon: string;
}
