"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents & Plans. Unified. Welcome to <span className="underline">Atlas</span>.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-normal">
        Atlas is the all-in-one workspace for your notes, documents, and plans. It&apos;s like a second brain, but better.
      </h3>
      <Button>Enter Atlas<ArrowRight className="h-4 w-4" /></Button>
    </div>
  );
};
