import type { TaskList } from "@/redux/taskLists/types";

export const TaskListCard = ({ taskList }: { taskList: TaskList }) => {
  return (
    <div className="bg-white rounded-md  p-4 flex flex-col justify-between gap-4 cursor-pointer border border-gray-100 ">
      <p className="text-2xl mb-2">{taskList.icon}</p>
      <div className="">
        <h2 className="mb-2 truncate">{taskList.name}</h2>
        <p className="text-sm text-gray-400">{taskList.tasks.length} Tasks</p>
      </div>
    </div>
  );
};
