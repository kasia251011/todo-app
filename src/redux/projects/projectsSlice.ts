import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Project } from "./types";
import { v4 as uuid } from "uuid";

const initialState: { projects: Project[] } = { projects: [] };

export const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Omit<Project, "id">>) => {
      state.projects.push({ ...action.payload, id: uuid() });
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
