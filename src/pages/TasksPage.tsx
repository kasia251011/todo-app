import { useAppSelector } from "@/redux/hooks";
import { ArrowLeftOutlined } from "@ant-design/icons/es/icons/index";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router";

export const TasksPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { taskLists } = useAppSelector((state) => state.taskLists);
  const filteredTaskList = taskLists.find((list) => list.id === id);

  return (
    <div className="bg-blue-600 h-screen flex flex-col w-screen">
      <div className="p-10 flex flex-col gap-4 ">
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          variant="solid"
        />
        <div className="flex flex-col gap-2 text-white">
          <p className="text-lg bg-white rounded-full p-3 w-fit mb-2">
            {filteredTaskList?.icon}
          </p>
          <h2 className="text-xl font-semibold">{filteredTaskList?.name}</h2>
          <p className="text-sm text-blue-100">
            {filteredTaskList?.tasks.length} Tasks
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-white h-full rounded-t-2xl mt-3 ">
        {filteredTaskList?.tasks.map((task) => (
          <p key={task.id}>{task.title}</p>
        ))}
      </div>
    </div>
  );
};
