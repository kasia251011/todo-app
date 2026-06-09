import { useAppDispatch } from "@/redux/hooks";
import { checkTask, removeTask } from "@/redux/slices/taskSlice";
import type { Task } from "@/redux/slices/types";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import dayjs from "dayjs";

export const TaskItem = ({ task }: { task: Task }) => {
  const dispatch = useAppDispatch();
  const today = dayjs();

  return (
    <div
      className="flex items-center  px-4 hover:bg-gray-100 cursor-pointer rounded-lg py-4"
      onClick={() => dispatch(checkTask(task.id))}
    >
      <div className="flex gap-6">
        <Checkbox checked={task.completed} />
        <div className="">
          <p
            className={`font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
          >
            {task.title}
          </p>
          {task.deadline && (
            <p
              className={`text-sm font-medium ${task.deadline < today && !task.completed ? "text-red-500" : "text-gray-500"}`}
            >
              {task.deadline.format("MM:HH MMMM D")}
            </p>
          )}
        </div>
      </div>
      <div className="ml-auto">
        <Button
          icon={<DeleteOutlined />}
          type="text"
          onClick={() => dispatch(removeTask(task.id))}
        />
      </div>
    </div>
  );
};
