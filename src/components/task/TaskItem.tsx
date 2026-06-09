import { useAppDispatch } from "@/redux/hooks";
import { checkTask, removeTask } from "@/redux/slices/taskSlice";
import type { Task } from "@/redux/slices/types";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import dayjs from "dayjs";
import { useMemo } from "react";

export const TaskItem = ({ task }: { task: Task }) => {
  const dispatch = useAppDispatch();
  const today = dayjs();
  const isOverdue = useMemo(
    () => dayjs(task.deadline) < today && !task.completed,
    [task.completed, task.deadline, today],
  );

  return (
    <div
      className="flex items-center  px-4 hover:bg-gray-100 cursor-pointer rounded-lg py-4"
      onClick={() => dispatch(checkTask(task.id))}
    >
      <div className="flex gap-6">
        <Checkbox checked={task.completed} />
        <div className="font-medium ">
          <p
            className={`${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
          >
            {task.title}
          </p>
          {task.deadline && (
            <p
              className={`text-sm ${isOverdue ? "text-red-500" : "text-gray-500"}`}
            >
              {dayjs(task.deadline).format("MM:HH MMM D")}
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
