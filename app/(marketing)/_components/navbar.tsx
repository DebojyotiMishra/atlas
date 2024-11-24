"use client";
import { useScrollTop } from "@/hooks/useScrollTop";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
    const scrolled = useScrollTop();

    return (
        <div className={cn("z-50 bg-background fixed flex items-center w-full p-6", scrolled && "border-b shadow-sm")}>
            <Logo></Logo>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <ModeToggle />
            </div>
        </div>
    )
}