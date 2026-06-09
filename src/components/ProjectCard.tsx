import type { Project } from "@/redux/projects/types";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white rounded-md  p-4 flex flex-col justify-between gap-4 cursor-pointer border border-gray-100 ">
      <p className="text-2xl mb-2">{project.icon}</p>
      <div className="">
        <h2 className="mb-2 truncate">{project.name}</h2>
        <p className="text-sm text-gray-400">{project.tasks.length} Tasks</p>
      </div>
    </div>
  );
};
