import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task, TaskBase } from "./types";
import { v4 as uuid } from "uuid";
import { DEFAULT_TASKS } from "../../data/defaultTasks";

const initialState: { tasks: Task[] } = {
  tasks: DEFAULT_TASKS,
};

export const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskBase>) => {
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
