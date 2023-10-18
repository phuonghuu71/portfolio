import ExperienceItem from "../ui/atoms/ExperienceItem";
import SectionContainer from "../ui/atoms/SectionContainer";

export default function Experience() {
  return (
    <SectionContainer id="experience" title="Experience">
      <div className="flex flex-col">
        <ExperienceItem
          event="Education (9/2018 - 2/2022)"
          location="Saigon International University"
          description="Where I learn all basics of programmings."
          icon="AcademicCapIcon"
          className="w-6 h-6 text-black dark:text-white"
        />

        <ExperienceItem
          event="Software Engineer (3/2022 - 2/2023)"
          location="Kyanon Digital"
          description="This is when I become an Intern of my first company. I study about
              platform Low-Code and realize many disadvantages using its own
              platform. However, I become a Fresher for approximately half of
              year. I do learn a lot about mindset, logic, and design pattern
              also."
          icon="BriefcaseIcon"
          className="w-6 h-6 text-black dark:text-white"
        />

        <ExperienceItem
          event="Front-End Intern (5/2023 - 8/2023)"
          location="Kyanon Digital"
          description="My company has the program for Front-End intern so I think I need
              some changes. After three months I receive company Internship
              Certification."
          icon="BriefcaseIcon"
          className="w-6 h-6 text-black dark:text-white"
        />
      </div>
    </SectionContainer>
  );
}
