import type { Task } from "@/redux/slices/types";
import Checkbox from "antd/es/checkbox/Checkbox";

export const TaskItem = ({ task }: { task: Task }) => {
  return (
    <div className="flex items-center justify-between px-8 ">
      <div className="">
        <p className="font-medium">{task.title}</p>
        {task.deadline && (
          <p className="text-sm font-medium text-gray-500">
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
