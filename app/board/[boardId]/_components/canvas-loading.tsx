import { Skeleton } from "@/components/ui/skeleton"
import { Loader } from "lucide-react"
import { Info } from "./info"
import { Participants } from "./participants"
import { Toolbar } from "./toolbar"

export const Loading = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
        <Loader className="animate-spin h-6 w-6 "/>
        <Info.Skeleton/>
        <Participants.Skeleton/>
        <Toolbar.Skeleton/>
    </main>
  )
}
