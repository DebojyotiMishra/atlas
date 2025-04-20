"use client";

import useCoverImage from "@/hooks/useCoverImage";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useEdgeStore } from "@/lib/edgestore";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { SingleImageUploader } from "@/components/upload/single-image-uploader";
import { set } from "zod";

const CoverImageModal = () => {
  const params = useParams();
  const update = useMutation(api.documents.update);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { edgestore } = useEdgeStore();
  const coverImage = useCoverImage();

  const onClose = () => {
    setIsSubmitting(false);
    coverImage.onClose();
  };

  const onUploadComplete = async (url: string) => {
    if (!url) return;

    setIsSubmitting(true);
    try {
      await update({
        id: params.documentId as Id<"documents">,
        coverImage: url,
      });
      onClose();
    } catch (error) {
      console.error("Failed to update document:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogHeader>
          <h2 className="text-center text-lg font-semibold">Cover Image</h2>
        </DialogHeader>
        <SingleImageUploader
          uploadFn={async ({ file, signal, onProgressChange }) => {
            const res = await edgestore.publicFiles.upload({
              file,
              signal,
              options: {
                replaceTargetUrl: coverImage.url,
              },
              onProgressChange,
            });
            return { url: res.url };
          }}
          onUploadComplete={onUploadComplete}
          autoUpload={true}
          dropzoneOptions={{
            maxSize: 1024 * 1024 * 5, // 5MB
            accept: {
              "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp"],
            },
          }}
          className="w-full h-[200px] rounded-md"
          disabled={isSubmitting}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModal;
