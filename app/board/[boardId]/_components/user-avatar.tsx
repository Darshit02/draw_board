import { Hint } from "@/components/hint";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  src?: string;
  fallback?: string;
  name?: string;
  boarderColor?: string;
}

export const UserAvatar = ({
  src,
  fallback,
  name,
  boarderColor,
}: UserAvatarProps) => {
  return (
    <Hint label={name || "TeamMate"} side="bottom" sideOffset={10}>
      <Avatar
        className="h-8 w-8 border-2"
        style={{ borderColor: boarderColor || "white" }}
      >
        <AvatarImage src={src} />
        <AvatarFallback className="text-xs font-semibold">{fallback}</AvatarFallback>
      </Avatar>
    </Hint>
  );
};
