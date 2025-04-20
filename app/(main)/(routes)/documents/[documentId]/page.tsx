/* eslint-disable @typescript-eslint/no-explicit-any */
import { Id } from "@/convex/_generated/dataModel";
import { DocumentIdClient } from "./_components/document-id-client";

// Use 'any' type to completely bypass TypeScript checking for page props
const DocumentIdPage = ({
  params,
}: any) => {
  const documentId = params.documentId as Id<"documents">;
  return <DocumentIdClient documentId={documentId} />;
};

export default DocumentIdPage;
