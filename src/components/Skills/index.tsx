import Image from "next/image";
import SectionContainer from "../ui/atoms/SectionContainer";

export default function Skills() {
  return (
    <SectionContainer id="skills" title="Skills">
      <p className="text-center text-gray-600 mb-4">{`I have experience with these technologies`}</p>

      <div className="flex justify-center gap-4 items-center w-full flex-wrap">
        <Image
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          }
          alt="skills"
          width={50}
          height={50}
        />

        <Image
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          }
          alt="skills"
          width={50}
          height={50}
        />

        <Image
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
          }
          alt="skills"
          width={50}
          height={50}
        />

        <Image
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          }
          alt="skills"
          width={50}
          height={50}
        />

        <Image
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
          }
          alt="skills"
          width={50}
          height={50}
        />

        <Image
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          }
          alt="skills"
          width={50}
          height={50}
        />

        <Image
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          }
          alt="skills"
          width={50}
          height={50}
        />

        <Image
          src={
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
          }
          alt="skills"
          width={50}
          height={50}
        />
      </div>
    </SectionContainer>
  );
}
