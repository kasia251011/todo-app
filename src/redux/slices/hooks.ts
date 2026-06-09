import { useAppSelector } from "../hooks";

export const useGetTaskListById = (id: string) => {
  const taskLists = useAppSelector((state) => state.taskLists.taskLists);
  return taskLists.find((list) => list.id === id);
};

export const useGetTasksByListId = (listId: string) => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  return tasks.filter((task) => task.listId === listId);
};

export const useGetTaskById = (id: string) => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  return tasks.find((task) => task.id === id);
};
