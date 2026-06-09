import { AddTaskListButton } from "@/components/taskList/AddTaskListButton";
import { TaskListCard } from "@/components/taskList/TaskListCard";
import { useAppSelector } from "@/redux/hooks";

export const DashboardPage = () => {
  const { taskLists } = useAppSelector((state) => state.taskLists);

  return (
    <div className="h-screen w-screen p-10">
      <h1 className="text-3xl font-semibold pb-4">Lists</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {taskLists.map((taskList) => (
          <TaskListCard key={taskList.id} taskList={taskList} />
        ))}
      </div>
      <AddTaskListButton />
    </div>
  );
};
