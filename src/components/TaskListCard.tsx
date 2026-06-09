import type { TaskList } from "@/redux/taskLists/types";
import { useNavigate } from "react-router";

export const TaskListCard = ({ taskList }: { taskList: TaskList }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${taskList.id}`)}
      className="bg-white rounded-md  p-4 flex flex-col justify-between gap-4 cursor-pointer border border-gray-100 "
    >
      <p className="text-2xl mb-2">{taskList.icon}</p>
      <div className="">
        <h2 className="mb-2 truncate">{taskList.name}</h2>
        <p className="text-sm text-gray-400">{taskList.tasks.length} Tasks</p>
      </div>
    </div>
  );
};
