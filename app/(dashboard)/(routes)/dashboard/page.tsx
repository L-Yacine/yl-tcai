"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { tools } from "@/constants";

export default function HomePage() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl font-bold text-center md:text-4xl">
          Ai Content At Your Fingertips
        </h2>
        <p className="text-sm font-light text-center text-muted-foreground md:text-lg">
          Explore cutting-edge ai generators.
        </p>
      </div>
      <div className="px-4 space-y-4 md:px-20 lg:px-32 bg-slate-200">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className={`p-4 ${tool.bgColor} border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer`}
          >
            <div className="flex items-center gap-x-4">
              <Image
                key={tool.label}
                width={45}
                height={45}
                src={tool.icon}
                alt="icon"
              />
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
}
