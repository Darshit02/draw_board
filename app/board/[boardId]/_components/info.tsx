"use client";

export const Info = () => {
  return (
    <div className="absolute top-2 left-2 bg-white  rounded-md px-1.5 h-12 flex items-center shadow-md">
hello ...........
    </div>
  );
};


export const InfoSkeleton = ()  => {
  return (
    <div className="animate-pulse absolute top-2 left-2 bg-neutral-100 rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};
