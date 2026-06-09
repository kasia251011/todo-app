import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Project } from "./types";
import { v4 as uuid } from "uuid";

const initialState: { projects: Project[] } = {
  projects: [
    { name: "Default Project", id: uuid(), tasks: [], icon: "📁" },
    {
      name: "Another Project mkmlmlkmklmklklmk lkmklmklmkmklmkl",
      id: uuid(),
      tasks: [],
      icon: "📂",
    },
    {
      name: "Another Project mkmlmlkmklmklklmk lkmklmklmkmklmkl",
      id: uuid(),
      tasks: [],
      icon: "📂",
    },
    {
      name: "Another Project mkmlmlkmklmklklmk lkmklmklmkmklmkl",
      id: uuid(),
      tasks: [],
      icon: "📂",
    },
  ],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    addProject: (
      state,
      action: PayloadAction<Omit<Project, "id" | "tasks">>,
    ) => {
      state.projects.push({ ...action.payload, id: uuid(), tasks: [] });
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
