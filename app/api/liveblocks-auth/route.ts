import { Liveblocks } from "@liveblocks/node";

import { auth, currentUser } from "@clerk/nextjs";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOKS_SECRATE_KEY!,
});

export async function POST(request: Request) {
  const authorization = await auth();

  const user = await currentUser();

  // console.log({ authorization, user });
  
  if (!authorization || !user) {
    return new Response("Unauthorized", { status: 403 });
  }

  const { room } = await request.json();

  const board = await convex.query(api.board.get, { id: room });

  console.log(
    "AUTH_INFo" , {
        room , 
        board ,
        boardOrgId : board?.orgId,
        authorizationOrgId : authorization.orgId
    }
  );
  
  if (board?.orgId !== authorization.orgId) {
    return new Response("Unauthorized", { status: 403 });
  }

  const userInfo = {
    name: user.firstName!,
    picture: user.imageUrl,
  };

  // console.log({userInfo});
  
  const session = liveblocks.prepareSession(user.id, {
    userInfo,
  });
  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }
  const { status, body } = await session.authorize();
  // console.log({status,body} ,"ALLOWED");
  
  return new Response(body, { status });
}
