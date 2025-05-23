"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api"
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.documents.create);
    const router = useRouter();

    const onCreate = () => {
        const promise = create({
            title: "Untitled",
        }).then((documentId) => router.push(`/documents/${documentId}`));
        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "Note created",
            error: "Failed to create note",
        });
    }

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
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-1" />
                Create a new note
            </Button>
        </div>
     );
}
 
export default DocumentsPage;