import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskList } from "./types";
import { v4 as uuid } from "uuid";

const initialState: { taskLists: TaskList[] } = {
  taskLists: [
    { name: "Default TaskList", id: uuid(), tasks: [], icon: "📁" },
    {
      name: "Another TaskList mkmlmlkmklmklklmk lkmklmklmkmklmkl",
      id: uuid(),
      tasks: [],
      icon: "📂",
    },
    {
      name: "Another TaskList mkmlmlkmklmklklmk lkmklmklmkmklmkl",
      id: uuid(),
      tasks: [],
      icon: "📂",
    },
    {
      name: "Another TaskList mkmlmlkmklmklklmk lkmklmklmkmklmkl",
      id: uuid(),
      tasks: [],
      icon: "📂",
    },
  ],
};

export const taskListsSlice = createSlice({
  name: "taskLists",
  initialState: initialState,
  reducers: {
    addTaskList: (
      state,
      action: PayloadAction<Omit<TaskList, "id" | "tasks">>,
    ) => {
      state.taskLists.push({ ...action.payload, id: uuid(), tasks: [] });
    },
    removeTaskList: (state, action: PayloadAction<string>) => {
      state.taskLists = state.taskLists.filter(
        (taskList) => taskList.id !== action.payload,
      );
    },
  },
});

export const { addTaskList, removeTaskList } = taskListsSlice.actions;
export default taskListsSlice.reducer;
