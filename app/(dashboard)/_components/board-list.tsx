"use client";

import { EmptyFavorites } from "./empty-favorit";
import { EmptyNote } from "./empty-note";
import { EmptySearch } from "./empty-search";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = []; // fetch data

  if (!data?.length && query.search) {
    return <EmptySearch />;
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites/>;
  }
  if (!data?.length) {
    return <EmptyNote/>;
  }

  return <div>{JSON.stringify(query)}</div>;
};
