
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full border-b border-[var(--border)]">
      <div className="w-full px-8 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Learn more from
            <span className="block text-[var(--muted)]">every video.</span>
          </h1>

          <p className="text-[var(--muted)] mt-6 text-lg max-w-md">
            Turn YouTube videos into organized notes, searchable knowledge
            and flashcards.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <Link
              href="/signup"
              className="flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-lg text-sm font-semibold"
            >
              <Play size={16} fill="currentColor" />
              Get started
            </Link>

            <Link
              href="#features"
              className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition"
            >
              Learn more
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="bg-[var(--glass)] border border-[var(--border)] rounded-xl p-3">
          <div className="aspect-video bg-[var(--glass-hover)] rounded-lg flex items-center justify-center">
              <p>Preview</p>
          </div>
        </div>
      </div>
    </section>
  );
}
