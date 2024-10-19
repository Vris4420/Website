"use client";

import { cn } from "@/lib/utils";
import DotPattern from "../ui/dot-pattern";

export function DotPatternDemo() {
    return (
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded-lg  md:shadow-xl">
           
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                )}
            />
        </div>
    );
}
