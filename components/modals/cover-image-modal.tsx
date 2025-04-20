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

const CoverImageModal = () => {
  const params = useParams();
  const update = useMutation(api.documents.update);
  const [file, setFile] = useState<File>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { edgestore } = useEdgeStore();
  const coverImage = useCoverImage();

  const onClose = () => {
    setFile(undefined);
    setIsSubmitting(false);
    coverImage.onClose();
  };

  const onChange = async (file?: File) => {
    if (file) {
      setIsSubmitting(true);
      setFile(file);

      const res = await edgestore.publicFiles.upload({
        file,
        options: {
          replaceTargetUrl: coverImage.url,
        },
      });

      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });

      onClose();
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
            }
            }
            onUploadComplete={onChange}
            autoUpload={false}
            dropzoneOptions={{
              maxSize: 1024 * 1024 * 5, // 5MB
            }}
            className="w-full h-[200px] rounded-md"
            value={file ? [file] : []}
            onChange={(files) => {
              setFile(files[0]);
            }}
            disabled={isSubmitting}
          />
      </DialogContent>
    </Dialog>
  );
};

export default CoverImageModal;