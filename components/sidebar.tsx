"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: "/dashboard.png",
    href: "/dashboard",
    color: "text-orange-500",
  },
  {
    label: "Prompt helper",
    icon: "/conversation.png",
    href: "/conversation",
    color: "text-orange-500",
  },
  {
    label: "Image Creator",
    icon: "/image.png",
    color: "text-orange-500",
    href: "/image",
  },
  {
    label: "Short video Creator",
    icon: "/video.png",
    color: "text-orange-500",
    href: "/video",
  },
  {
    label: "Melody Generator",
    icon: "/music.png",
    color: "text-orange-500",
    href: "/music",
  },
  {
    label: "Ghost writer",
    icon: "/writer.png",
    color: "text-orange-500",
    href: "/code",
  },
  {
    label: "Settings",
    icon: "/settings.png",
    href: "/settings",
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-2 py-2 flex flex-col h-full bg-[#202837] text-white">
      <div className="flex-1 px-3 py-2">
        <Link href="/dashboard" className="flex items-center ml-3 mb-9">
          <div className="relative w-12 mr-2 h-14">
            <Image
              fill={true}
              alt="Logo"
              src="/assets/logoplaingrd.png"
              sizes="50vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <h1 className="text-lg font-bold text-white">T&C Studio</h1>
              {isPro ? (
                <div className="h-4 px-2 ml-1 text-xs text-center text-yellow-900 bg-yellow-400 rounded-full w-15">
                  Pro
                </div>
              ) : (
                <div className="h-4 px-2 ml-1 text-xs text-center text-gray-800 bg-gray-200 rounded-full w-15">
                  Trial
                </div>
              )}
            </div>
            <h3 className="text-xs text-left text-[#5d6a76] text">
              by yacinel.com
            </h3>
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1 gap-2">
                <Image
                  key={route.label}
                  width={24}
                  height={24}
                  src={route.icon}
                  alt="icon"
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  );
};
