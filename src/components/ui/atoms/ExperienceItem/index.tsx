import DynamicIcon, { DynamicIconProps } from "@/components/DynamicIcon";

export interface ExperienceItemProps extends DynamicIconProps {
  event: string;
  location: string;
  description: string;
}

export default function ExperienceItem({
  event,
  location,
  description,
  ...props
}: ExperienceItemProps) {
  return (
    <div className="group flex gap-x-3">
      <div className="lg:group-odd:order-3 lg:group-even:order-1 w-full hidden lg:block" />

      <div className="relative lg:order-2 order-1 shrink-0">
        <div className="w-12 h-12 shrink-0 rounded-full border z-10 flex justify-center items-center">
          <DynamicIcon {...props} />
        </div>
        <div className="h-[calc(100%-3rem)] w-px bg-gray-300 absolute left-1/2 -translate-x-1/2 group-last:hidden" />
      </div>

      <div className="flex gap-x-4 w-full pb-4 last:mb-0 lg:group-odd:order-1 lg:group-even:order-3 order-2">
        <div className="w-full border rounded-md p-2 relative">
          <div className="absolute border-solid border-r-gray-300 border-r-8 border-y-transparent border-y-8 border-l-0 -left-2 lg:group-even:-left-2 lg:group-odd:-right-2 lg:group-odd:left-auto lg:group-odd:rotate-180 top-4"></div>

          <h4 className="mb-2">{event}</h4>
          <h5 className="mb-1">{location}</h5>

          <p className="text-sm text-justify leading-5">{description}</p>
        </div>
      </div>
    </div>
  );
}
