"use client";

import * as React from "react";
import { SingleImageDropzone, SingleImageDropzoneProps } from "./single-image";
import {
  UploaderProvider,
  FileState,
  CompletedFileState,
} from "./uploader-provider";

interface SingleImageUploaderProps
  extends Omit<SingleImageDropzoneProps, "value" | "onChange"> {
  /**
   * Upload function to use with the uploader
   */
  uploadFn: (args: {
    file: File;
    signal: AbortSignal;
    onProgressChange: (progress: number) => void | Promise<void>;
  }) => Promise<{ url: string }>;

  /**
   * Callback when upload is completed
   */
  onUploadComplete?: (url: string) => void | Promise<void>;

  /**
   * Whether to automatically upload the file when it's added
   * @default true
   */
  autoUpload?: boolean;

  /**
   * Value to control the file state externally
   */
  value?: FileState[];

  /**
   * Callback when the file changes
   */
  onChange?: (args: {
    allFiles: FileState[];
    completedFiles: CompletedFileState[];
  }) => void | Promise<void>;
}

/**
 * A self-contained single image uploader component with built-in UploaderProvider
 */
export function SingleImageUploader({
  uploadFn,
  onUploadComplete,
  autoUpload = true,
  value,
  onChange,
  ...dropzoneProps
}: SingleImageUploaderProps) {
  return (
    <UploaderProvider
      uploadFn={uploadFn}
      autoUpload={autoUpload}
      value={value}
      onChange={onChange}
      onUploadCompleted={
        onUploadComplete ? (file) => onUploadComplete(file.url) : undefined
      }
    >
      <SingleImageDropzone {...dropzoneProps} />
    </UploaderProvider>
  );
}
