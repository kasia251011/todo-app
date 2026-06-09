import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskList } from "./types";
import { v4 as uuid } from "uuid";

const initialState: { taskLists: TaskList[] } = {
  taskLists: [
    {
      name: "Default TaskList",
      id: "0",
      icon: "📁",
    },
    {
      name: "Another TaskList",
      id: "1",
      icon: "📂",
    },
    {
      name: "Another TaskList mkmlmlkmklmklklmk lkmklmklmkmklmkl",
      id: "2",
      icon: "📂",
    },
    {
      name: "Another TaskList mkmlmlkmklmklklmk lkmklmklmkmklmkl",
      id: "3",
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
      state.taskLists.push({ ...action.payload, id: uuid() });
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
