
import { FileText, Search, Library, ArrowUpRight } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="w-full px-8 py-20">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Everything you need to learn better.
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row gap-4">

        <div className="flex items-center gap-4 flex-1 min-w-0 bg-[var(--glass)] border border-[var(--border)] rounded-xl p-4 xl:p-5 hover:bg-[var(--glass-hover)] transition">
          <FileText size={22} className="shrink-0" />

          <div className="flex-1">
            <h3 className="font-medium">AI-powered notes</h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              Turn videos into clear, organized notes.
            </p>
          </div>

          <ArrowUpRight size={19} className="shrink-0 text-[var(--muted)]" />
        </div>

        <div className="flex items-center gap-4 flex-1 min-w-0 bg-[var(--glass)] border border-[var(--border)] rounded-xl p-4 xl:p-5 hover:bg-[var(--glass-hover)] transition">
          <Search size={22} className="shrink-0" />

          <div className="flex-1">
            <h3 className="font-medium">Search your knowledge</h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              Find information across your notes.
            </p>
          </div>

          <ArrowUpRight size={19} className="shrink-0 text-[var(--muted)]" />
        </div>

        <div className="flex items-center gap-4 flex-1 min-w-0 bg-[var(--glass)] border border-[var(--border)] rounded-xl p-4 xl:p-5 hover:bg-[var(--glass-hover)] transition">
          <Library size={22} className="shrink-0" />

          <div className="flex-1">
            <h3 className="font-medium">Build your library</h3>
            <p className="text-sm text-[var(--muted)] mt-1">
              Keep videos and notes organized.
            </p>
          </div>

          <ArrowUpRight size={19} className="shrink-0 text-[var(--muted)]" />
        </div>

      </div>
    </section>
  );
}
