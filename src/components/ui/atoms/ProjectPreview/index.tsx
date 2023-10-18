import DynamicIcon from "@/components/DynamicIcon";
import Image from "next/image";
import Link from "next/link";

export interface ProjectPreviewProps {
  title: string;
  src: string;
  href: string;
}

export default function ProjectPreview({
  title,
  src,
  href,
}: ProjectPreviewProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="w-full max-w-md lg:w-fit flex flex-col h-48 lg:h-64 group rounded-md border p-2"
    >
      <div className="flex justify-between items-center mb-2">
        <p>{title}</p>
        <DynamicIcon
          icon="ArrowRightIcon"
          className="w-6 h-6 text-gray-600 group-hover:translate-x-0 -translate-x-2 transition-transform"
        />
      </div>

      <div
        className="flex-1 w-full h-full overflow-hidden rounded-md
      "
      >
        <Image
          src={src}
          alt="product"
          width={9999}
          height={9999}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
        />
      </div>
    </Link>
  );
}
