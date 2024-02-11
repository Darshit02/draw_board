import { Skeleton } from "@/components/ui/skeleton"

export const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex shadow-md items-center">Participants</div>
  )
}


Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="animate-pulse absolute h-12 top-2 right-2 bg-neutral-100 rounded-md p-3 flex shadow-md items-center w-[100px]"/>
  )
}