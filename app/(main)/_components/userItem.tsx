"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { ChevronsLeftRight } from "lucide-react";

export const UserItem = () => {
    const { user } = useUser();

  return (
    <>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div role="button" className="flex items-center w-full p-6 text-sm hover:bg-primary/5">
                    <div className="gap-x-2 flex items-center max-w-[150px]">
                        <Avatar className="h-5 w-5">
                            <AvatarImage src={user?.imageUrl} />
                        </Avatar>
                        <span className="text-start font-medium line-clamp-1 tracking-[-0.01rem]">
                            {user?.firstName}&apos;s Atlas
                        </span>
                    </div>
                    <ChevronsLeftRight className="rotate-90 ml-2 text-muted-foreground h-4 w-4"></ChevronsLeftRight>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 mt-[-0.8rem]" align="start" alignOffset={11} forceMount>
                <div className="flex flex-col space-y-6 p-2">
                    {/* <p className="text-xs font-medium leading-none text-muted-foreground">
                        {user?.emailAddresses[0].emailAddress}
                    </p> */}
                    <div className="flex items-center gap-x-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user?.imageUrl} />
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium line-clamp-1">
                                {user?.fullName}&apos;s Atlas
                            </p>
                            <p className="text-xs text-muted-foreground">
                                {user?.emailAddresses[0].emailAddress}
                            </p>
                        </div>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <SignOutButton>
                        <button>Sign out</button>
                    </SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </>
  );
};
