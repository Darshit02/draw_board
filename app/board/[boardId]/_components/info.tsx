"use client";

import Link from "next/link";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";
import { useRenameModel } from "@/store/use-rename-model";
import { Actions } from "@/components/actions";
import { Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeprator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModel();
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;
  return (
    <div className="absolute top-2 left-2 bg-white  rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Hint label="Go to Boards" sideOffset={10} side="bottom">
        <Button asChild className="px-2" variant="board">
          <Link href="/">
            <Image src="/logo1.svg" alt="Board logo" height={40} width={40} />
            <span className={cn("font-semibold text-xl ml-2 text-black")}>
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeprator />
      <Hint label="Edit Tital" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="text-base font-normal px-2"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>
      <TabSeprator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Mian Menu" side="bottom" sideOffset={10}>
            <Button variant="board" size="icon" >
              <Menu/>
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="animate-pulse absolute top-2 left-2 bg-neutral-100 rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};
