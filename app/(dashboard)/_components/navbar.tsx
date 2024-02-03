"use client";

import { UserButton } from "@clerk/nextjs";
import { SearchInput } from "./search-input";


export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="block lg:hidden flex-1"></div>
      <UserButton />
    </div>
  );
};
