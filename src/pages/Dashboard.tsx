import { ProjectCard } from "@/components/ProjectCard";
import { useAppSelector } from "@/redux/hooks";
import { PlusOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";

export const DashboardPage = () => {
  const { projects } = useAppSelector((state) => state.projects);

  return (
    <div className="h-screen w-screen p-10">
      <h1 className="text-3xl font-semibold pb-4">Lists</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <FloatButton type="primary" icon={<PlusOutlined />} />
    </div>
  );
};
