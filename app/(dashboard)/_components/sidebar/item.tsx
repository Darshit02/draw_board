"use client";

import Image from "next/image";
import { useOrganizationList, useOrganization } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}
export const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };
  return (
    <div className="aspect-square">
      <Hint label={name} side="right" sideOffset={18} align="start">
      <Image
        src={imageUrl}
        onClick={onClick}
        width={40}
        height={40}
        alt="Organization Logo"
        className={cn(
          "rounded-md",
          "cursor-pointer",
          "opacity-70",
          "hover:opacity-100",
          "transition" , isActive && "opacity-100"
        )}
      />
      </Hint>
    </div>
  );
};
