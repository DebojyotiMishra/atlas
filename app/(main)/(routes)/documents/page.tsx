"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";

const DocumentsPage = () => {
    const { user } = useUser();

    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image src="/empty.png"
            height="300"
            width="300"
            alt="Empty"
            className="dark:hidden">
            </Image>
            <Image src="/empty-dark.png"
            height="300"
            width="300"
            alt="Empty"
            className="hidden dark:block">
            </Image>
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s Atlas
            </h2>
            <Button>
                <PlusCircle className="h-4 w-4 mr-1" />
                Create a new note
            </Button>
        </div>
     );
}
 
export default DocumentsPage;