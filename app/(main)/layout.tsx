"use client";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import { redirect } from "next/navigation";
import { Navigation } from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        <div className="h-full flex items-center justify-center">
            <Spinner size="lg"></Spinner>
        </div>
    }

    if (!isAuthenticated) {
        return redirect('/');
    }

    return (
        <div className="h-full flex dark:bg-[#161616]">
            <Navigation></Navigation>
            <main className="flex-1 h-full overflow-y-auto">
            {children}
            </main>
        </div>
    );
}
 
export default MainLayout;