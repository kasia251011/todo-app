import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TaskList, TaskListBase } from "./types";
import { v4 as uuid } from "uuid";
import { DEFAULT_TASK_LISTS } from "../../data/defaultTaskLists";

const initialState: { taskLists: TaskList[] } = {
  taskLists: DEFAULT_TASK_LISTS,
};

export const taskListsSlice = createSlice({
  name: "taskLists",
  initialState: initialState,
  reducers: {
    addTaskList: (state, action: PayloadAction<TaskListBase>) => {
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
