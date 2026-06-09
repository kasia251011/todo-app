import { TaskItem } from "@/components/task/TaskItem";
import { useGetTaskListById, useGetTasksByListId } from "@/redux/slices/hooks";
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

  return (
    <div className="bg-blue-600 h-screen flex flex-col w-screen px-70">
      <div className="p-10 pb-5 flex flex-col gap-4 ">
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          variant="solid"
        />
        <div className="flex flex-col gap-2 text-white">
          <p className="text-lg bg-white rounded-full p-3 w-fit my-2">
            {tasksList?.icon}
          </p>
          <h2 className="text-xl font-semibold">{tasksList?.name}</h2>
          <p className="text-sm text-blue-100">{tasks.length} Tasks</p>
        </div>
      </div>

      <div className="px-4 pt-8 bg-white h-full rounded-t-2xl mt-3 ">
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
