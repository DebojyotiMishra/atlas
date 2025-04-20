"use client";

import { use } from "react";
import Toolbar from "@/components/toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";
import Editor from "@/components/editor";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
    const unwrappedParams = use(params);
    const document = useQuery(api.documents.getById, {
        documentId: unwrappedParams.documentId,
    });

    if (document === undefined) {
        return (
            <div>
                <Cover.Skeleton />
                <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
                    <div className="space-y-4 pl-8 pt-4">
                        <Skeleton className="h-14 w-[50%]"></Skeleton>
                        <Skeleton className="h-4 w-[80%]"></Skeleton>
                        <Skeleton className="h-4 w-[40%]"></Skeleton>
                        <Skeleton className="h-4 w-[60%]"></Skeleton>
                    </div>
                </div>
            </div>
        )
    }

    if (document === null) {
        return <div>Not found</div>;
    }

    return (
        <div className="pb-40">
            <Cover url={document.coverImage} />
            <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
                <Toolbar initialData={document}></Toolbar>
                <Editor onChange={() => {}} initialContent={document.content} />
            </div>
        </div>
    );
}

export default DocumentIdPage;