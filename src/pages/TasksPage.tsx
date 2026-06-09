import { AddTaskButton } from "@/components/task/AddTaskButton";
import { TaskItem } from "@/components/task/TaskItem";
import { RemoveTaskListButton } from "@/components/taskList/RemoveTaskListButton";
import { useGetTaskListById, useGetTasksByListId } from "@/redux/slices/hooks";
import { PATHS } from "@/router/paths";
import { ArrowLeftOutlined } from "@ant-design/icons/es/icons/index";
import { Button } from "antd";
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";

export const TasksPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const tasksList = useGetTaskListById(id!);
  const tasks = useGetTasksByListId(id!);

  const done = useMemo(() => tasks.filter((task) => task.completed), [tasks]);
  const toDo = useMemo(() => tasks.filter((task) => !task.completed), [tasks]);

  if (!id || !tasksList || !tasks) {
    return (
      <div className="bg-blue-600 h-screen flex items-center justify-center w-screen px-70">
        <p className="text-white text-2xl">Task List not found</p>
      </div>
    );
  }

  return (
    <div className="bg-blue-600 h-screen flex flex-col w-screen px-70">
      <div className="flex justify-between items-center p-10 pt-15">
        <div className="flex items-center gap-4 ">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate(PATHS.HOME)}
            variant="solid"
          />
          <p className="text-lg bg-white rounded-full p-3 w-fit my-2">
            {tasksList?.icon}
          </p>
          <div className="flex flex-col gap-1 text-white">
            <h2 className="text-xl font-semibold">{tasksList?.name}</h2>
            <p className="text-sm text-blue-100">{tasks.length} Tasks</p>
          </div>
        </div>
        <div className="flex gap-2">
          <AddTaskButton taskListId={id} />
          <RemoveTaskListButton id={id} name={tasksList.name} />
        </div>
      </div>
      <div className="px-4 pt-8 bg-white h-full rounded-t-2xl  ">
        <p className="px-4 py-2 text-slate-400"> {toDo.length} To Do </p>
        <div className="flex flex-col gap-1">
          {toDo.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
        <p className="px-4 py-2 text-slate-400">{done.length} Done </p>
        <div className="flex flex-col gap-1">
          {done.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};
