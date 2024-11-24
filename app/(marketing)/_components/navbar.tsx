"use client";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";

export const Navbar = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    const scrolled = useScrollTop();

    return (
        <div className={cn("z-50 bg-background fixed flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
            <Logo></Logo>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (
                    <Spinner></Spinner>
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost">Log in</Button>
                        </SignInButton>

                        <SignInButton mode="modal">
                        <Button variant="ghost">Get Atlas</Button>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant="ghost">
                            <Link href="/documents">
                            Enter Atlas
                            </Link>

                            <UserButton afterSignOutUrl="/">
                            </UserButton>
                        </Button>
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}