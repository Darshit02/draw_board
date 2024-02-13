"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface InfoProps {
  boardId: string;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Info = ({ boardId } : InfoProps) => {
const data = useQuery(api.board.get , {
  id : boardId as Id<"boards">
})

  return (
    <div className="absolute top-2 left-2 bg-white  rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Button className="px-2" variant="board">
        <Image src="/logo1.svg" alt="Board logo" height={40} width={40} />
        <span className={cn("font-semibold text-xl ml-2 text-black")}>
          Board
        </span>
      </Button>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="animate-pulse absolute top-2 left-2 bg-neutral-100 rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};
