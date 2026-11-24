
export default function Workspace() {
  return (
    <section className="w-full px-8 py-20 border-y border-[var(--border)]">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-video bg-[var(--glass)] border border-[var(--border)] rounded-xl flex items-center justify-center">
          <p className="text-sm text-[var(--muted)]">
            Workspace preview
          </p>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Everything you learn, in one place.
          </h2>

          <p className="text-[var(--muted)] mt-5 leading-relaxed">
            Keep your video notes organized, revisit important ideas
            and build a library of knowledge you can search anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
