"use client";
import { Input } from "@components/ui/input";
import { useState } from "react";
import { UploadIcon } from "lucide-react";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import "@app/globals.css";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  const [audioFile, setAudioFile] = useState();
  const [pdfFiles, setPdfFiles] = useState();
  const handleAudioDrop = (files) => {
    setFiles(files);
  };

  const handlePdfDrop = (files) => {
    setFiles(files);
  };
  return (
    <div className="py-[var(--spacing-xl)] px-[var(--spacing-4xl)] min-h-screen flex flex-col items-center">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-1 w-7/8">
        {" "}
        Create Presentation
      </h2>
      <h3 className="mt-[var(--spacing-md2)] scroll-m-20 text-xl font-semibold tracking-tight w-3/4">
        Project Info
      </h3>
      <div className="mb-[var(--spacing-md)] mt-[var(--spacing-sm)] flex !items-start flex-col gap-[var(--spacing-md)] p-[var(--spacing-sm)] border-0 shadow-none w-3/4">
        <Label className="text-lg">Name</Label>
        <Input
          placeholder="Name"
          className="border-1 -mt-[var(--spacing-sm)] "
        />
        <Label className="text-lg">Description</Label>
        <Textarea
          className="border-1 -mt-[var(--spacing-sm)] "
          placeholder="Description"
        ></Textarea>
      </div>

      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight w-3/4">
        Upload Files
      </h3>

      <div className="mb-[var(--spacing-lg)] mt-[var(--spacing-md)] gap-[var(--spacing-lg)] flex flex-col w-3/4">
        <Dropzone
          maxSize={1024 * 1024 * 10}
          accept={{ "audio/*": [".mp3", ".wav"] }}
          minSize={1024}
          onDrop={setAudioFile}
          onError={console.error}
          src={audioFile}
          className="dropzone hover:cursor-pointer"
        >
          <DropzoneEmptyState>
            <div className="flex w-full items-center gap-4 p-8">
              <div className="flex size-16 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <UploadIcon size={16} />
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">Upload Audio</p>
                <p className="text-muted-foreground text-xs">
                  Drag and drop or click to upload
                </p>
              </div>
            </div>
          </DropzoneEmptyState>
          <DropzoneContent />
        </Dropzone>

        <Dropzone
          maxSize={1024 * 1024 * 10}
          accept={{ "application/pdf": [".pdf"] }}
          onDrop={setPdfFiles}
          onError={console.error}
          src={pdfFiles}
          className="dropzone hover:cursor-pointer"
        >
          <DropzoneEmptyState>
            <div className="flex w-full items-center gap-4 p-8">
              <div className="flex size-16 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <UploadIcon size={24} />
              </div>
              <div className="text-left">
                <p className="font-medium text-sm">Upload Slide Deck</p>
                <p className="text-muted-foreground text-xs">
                  Drag and drop or click to upload
                </p>
              </div>
            </div>
          </DropzoneEmptyState>
          <DropzoneContent />
        </Dropzone>
      </div>

      <Button className="w-1/4 h-[var(--spacing-xl)] text-lg font-semibold mt-[var(--spacing-lg)]">
        Create Now
      </Button>
    </div>
  );
}
