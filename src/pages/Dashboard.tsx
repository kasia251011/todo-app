import { Button } from "antd";

export const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 h-screen w-screen items-center justify-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Button onClick={() => alert("Hello")}>Click me</Button>
    </div>
  );
};
