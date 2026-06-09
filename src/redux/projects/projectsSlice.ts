import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Project } from "./types";

const initialState: { projects: Project[] } = { projects: [] };

export const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(
        (project) => project.id !== action.payload,
      );
    },
  },
});

export const { addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
