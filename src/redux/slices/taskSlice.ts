import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "./types";
import { v4 as uuid } from "uuid";
import dayjs from "dayjs";

const initialState: { tasks: Task[] } = {
  tasks: [
    {
      id: "0",
      title: "Default Task",
      description: "This is a default task in the default task list.",
      completed: false,
      importance: "medium",
      listId: "0",
    },
    {
      id: "1",
      title: "Another Task",
      description: "This is another task in the default task list.",
      completed: true,
      importance: "high",
      deadline: dayjs().add(2, "day").toISOString(),
      listId: "0",
    },
    {
      id: "2",
      title: "Another Task",
      description: "This is another task in the default task list.",
      completed: true,
      importance: "high",
      deadline: dayjs().subtract(2, "day").toISOString(),
      listId: "0",
    },
  ],
};

export const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, "id">>) => {
      state.tasks.push({ ...action.payload, id: uuid() });
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    checkTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, checkTask } = taskSlice.actions;
export default taskSlice.reducer;
