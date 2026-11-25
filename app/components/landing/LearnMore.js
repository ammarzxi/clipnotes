
"use client";

import { useEffect, useState } from "react";

const features = [
  {
    title: "Transcripts",
    description:
      "Read through video transcripts, find important moments and revisit exactly what was said.",
    image:
      "https://images.unsplash.com/photo-1758611971270-89ce7ed506e1?auto=format&fit=crop&w=1400&q=85",
    alt: "Studying and writing notes at a desk",
  },
  {
    title: "Flashcards",
    description:
      "Turn important concepts into flashcards and test what you've learned whenever you want.",
    image:
      "https://images.unsplash.com/photo-1758611971270-89ce7ed506e1?auto=format&fit=crop&w=1400&q=85",
    alt: "Student working on a laptop",
  },
  {
    title: "Collections",
    description:
      "Keep related videos together in collections so your learning stays organized.",
    image:
      "https://images.unsplash.com/photo-1758611971270-89ce7ed506e1?auto=format&fit=crop&w=1400&q=85",
    alt: "Books, laptop and study materials",
  },
  {
    title: "History",
    description:
      "Pick up where you left off and easily revisit videos you've already explored.",
    image:
      "https://images.unsplash.com/photo-1758611971270-89ce7ed506e1?auto=format&fit=crop&w=1400&q=85",
    alt: "Laptop and notebook on a desk",
  },
];

export default function LearnBeyondWatching() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        if (current === features.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const activeFeature = features[activeIndex];

  return (
    <section className="w-full px-8 py-24">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          More than just watching videos.
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] md:text-base">
          Turn what you watch into something you can revisit, organize and
          actually learn from.
        </p>
      </div>

      <div className="grid w-full items-center gap-12 lg:grid-cols-2">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--glass)]">
          <img
            key={activeIndex}
            src={activeFeature.image}
            alt={activeFeature.alt}
            className="learn-image-animation h-full w-full object-cover"
          />
        </div>

        <div className="border-l border-[var(--border)] pl-8">
          <div className="h-32 overflow-hidden">
            <div
                className={`flex flex-col transition-transform duration-700 ${
                  activeIndex === 0
                   ? "translate-y-0"
                     : activeIndex === 1
                      ? "-translate-y-32"
                       : activeIndex === 2
                          ? "-translate-y-64"
                          : "-translate-y-96"
                }`}
              >
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="flex h-32 shrink-0 flex-col justify-center text-left"
                >
                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
                    {feature.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
