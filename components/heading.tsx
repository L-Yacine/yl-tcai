import Image from "next/image";

import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  description: string;
  icon: string;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <>
      <div className="flex items-center px-4 mb-8 lg:px-8 gap-x-3">
        <div className={cn("p-2 w-fit rounded-md", bgColor)}>
          <Image
            src={icon}
            alt="icn"
            width={40}
            height={40}
            className={cn(iconColor)}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </>
  );
};
