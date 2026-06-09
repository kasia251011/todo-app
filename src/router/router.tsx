import { BrowserRouter, Route, Routes } from "react-router";
import { DashboardPage } from "@/pages/Dashboard";
import { PATHS } from "./paths";
import { TasksPage } from "@/pages/TasksPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={PATHS.HOME} element={<DashboardPage />} />
        <Route index path={PATHS.TASK_LIST} element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
}
