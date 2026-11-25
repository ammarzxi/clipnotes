
"use client";

import { useEffect, useState } from "react";
import {
  Play,
  FileText,
  Clock,
  Layers,
  Check,
  LoaderCircle,
  ArrowRight,
} from "lucide-react";

export default function HowItWorks() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
     setStep((current) => {
       if (current === steps.length - 1) {
        return 0;
      }

     return current + 1;
    });
  }, 2500);

    return () => clearInterval(interval);
  }, []);

 const steps = [
  {
    number: "01",
    title: "Import a video",
    description: "Paste a YouTube link to get started.",
    status: "Importing",
  },
  {
    number: "02",
    title: "Generate notes",
    description: "Turn video content into structured notes.",
    status: "Generating",
  },
  {
    number: "03",
    title: "Start learning",
    description: "Review your notes and revisit key moments.",
    status: "Ready",
  },
];

  return (
    <section className="w-full px-8 py-20 border-y border-[var(--border)]">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">
          From video to understanding.
        </h2>

        <p className="text-[var(--muted)] mt-4">
          Turn any YouTube video into organized learning material in three simple steps.
        </p>
      </div>

      <div className="grid xl:grid-cols-[1fr_auto_1fr] gap-6 xl:gap-8 items-center">
        <div className="flex flex-col gap-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`how-step flex items-center gap-4 border rounded-xl p-5 ${
                step === index
                  ? "border-[var(--foreground)] bg-[var(--glass-hover)]"
                  : "border-[var(--border)] bg-[var(--glass)]"
              }`}
            >
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-[var(--muted)] mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden xl:flex items-center justify-center text-[var(--muted)]">
          <ArrowRight size={24} strokeWidth={1.5} />
        </div>

        <div className="border border-[var(--border)] bg-[var(--glass)] rounded-xl p-5 min-h-72 flex flex-col justify-center">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-5">
            <span className="text-sm font-medium">ClipNotes</span>
          </div>

          <div key={step} className="how-preview flex flex-col gap-4">
            {step === 0 && (
              <>
                <Play size={28} />

                <h3 className="font-medium">Import your video</h3>

                <div className="border border-[var(--border)] rounded-lg p-3 text-sm text-[var(--muted)]">
                  Paste your YouTube URL...
                </div>

                <div className="h-2 rounded-full bg-[var(--glass-hover)] overflow-hidden">
                  <div className="how-loading h-full bg-[var(--foreground)] rounded-full" />
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <LoaderCircle size={28} className="animate-spin" />

                <h3 className="font-medium">Organizing your notes</h3>

                <div className="how-skeleton h-3 rounded-full bg-[var(--glass-hover)] w-full" />
                <div className="how-skeleton h-3 rounded-full bg-[var(--glass-hover)] w-4/5" />
                <div className="how-skeleton h-3 rounded-full bg-[var(--glass-hover)] w-3/5" />
              </>
            )}

            {step === 2 && (
              <>
                <Check size={28} />

                <h3 className="font-medium">Your notes are ready</h3>

                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <FileText size={18} /> Organized notes
                </div>

                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <Clock size={18} /> Video timestamps
                </div>

                <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
                  <Layers size={18} /> Flashcards
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
