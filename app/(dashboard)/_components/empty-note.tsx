"use client";
import { useMutation } from "convex/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyNote = () => {
  const { organization } = useOrganization();
  const {mutate , pending} = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="Empty" width={110} height={110} />
      <h2 className="text-2xl font-semibold mt-6">Create Your First Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your Organization
      </p>
      <div className="mt-6">
        <Button onClick={onClick} disabled={pending} size="lg">Create Board</Button>
      </div> 
    </div>
  );
};
