"use client";
import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export const List = () => {
    const { userMemberships } = useOrganizationList({
        userMemberships : {
            infinite : true,
        }
    });
    if (!userMemberships.data?.length) {
        return null;
    }
  return (
    <ul className="flex flex-col gap-4">
        {userMemberships.data?.map((item) => (
            <Item 
                key={item.organization.id}
                id={item.organization.id}
                name={item.organization.name}
                imageUrl={item.organization.imageUrl}
            />
        ))}
    </ul>
  )
}
