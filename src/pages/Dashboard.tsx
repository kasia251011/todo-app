import { AddTaskListButton } from "@/components/taskList/addTaskList/AddTaskListButton";
import { TaskListCard } from "@/components/taskList/TaskListCard";
import { useAppSelector } from "@/redux/hooks";

export const DashboardPage = () => {
  const { taskLists } = useAppSelector((state) => state.taskLists);

  return (
    <div className="h-screen w-screen container ">
      <h1 className="text-3xl font-semibold pb-4">Lists</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {taskLists.map((taskList) => (
          <TaskListCard key={taskList.id} taskList={taskList} />
        ))}
      </div>
      <AddTaskListButton />
    </div>
  );
};
