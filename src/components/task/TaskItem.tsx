import { useAppDispatch } from "@/redux/hooks";
import { checkTask } from "@/redux/slices/taskSlice";
import type { Task } from "@/redux/slices/types";
import Checkbox from "antd/es/checkbox/Checkbox";
import dayjs from "dayjs";

export const TaskItem = ({ task }: { task: Task }) => {
  const dispatch = useAppDispatch();
  const today = dayjs();

  return (
    <div
      className="flex items-center justify-between px-4 hover:bg-gray-100 cursor-pointer rounded-lg py-4"
      onClick={() => dispatch(checkTask(task.id))}
    >
      <div className="">
        <p className="font-medium">{task.title}</p>
        {task.deadline && (
          <p
            className={`text-sm font-medium ${task.deadline < today && !task.completed ? "text-red-500" : "text-gray-500"}`}
          >
            {task.deadline.format("MM:HH MMMM D")}
          </p>
        )}
      </div>
      <div className="">
        <Checkbox checked={task.completed} />
      </div>
    </div>
  );
};
