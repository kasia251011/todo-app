import { configureStore } from "@reduxjs/toolkit";
import taskListsReducer from "./slices/taskListsSlice";
import taskReducer from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    taskLists: taskListsReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
