import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/canvas-loading";
interface BoardPageProps {
  params: {
    boardId: string;
  };
}

const BoardPage = ({ params }: BoardPageProps) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default BoardPage;
