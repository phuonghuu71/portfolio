import Image from "next/image";
import SectionContainer from "../ui/atoms/SectionContainer";
import ProjectPreview from "../ui/atoms/ProjectPreview";

export default function Projects() {
  return (
    <SectionContainer id="projects" title="Projects">
      <p className="mb-4">{`Here's some of my works.`}</p>

      <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center">
        <ProjectPreview
          href="https://github.com/phuonghuu71/iARW"
          title="Agricultural Tracing (Completed)"
          src="https://f11-zpcloud.zdn.vn/8469108296484870163/0bd93feb1e82c9dc9093.jpg"
        />

        <ProjectPreview
          href="https://github.com/phuonghuu71/task-management"
          title="Task Management (Completed)"
          src="https://github.com/phuonghuu71/task-management/blob/main/Web%202.0%20client/README/Untitled%2016.png?raw=true"
        />

        <ProjectPreview
          href="https://github.com/phuonghuu71/ComicStorage"
          title="Comic Storage (In Progress)"
          src="https://f11-zpcloud.zdn.vn/471012378929382910/12e220d001b9d6e78fa8.jpg"
        />
      </div>
    </SectionContainer>
  );
}
