
import { Play, NotebookPen } from "lucide-react";

export default function EndingMark() {
  return (
    <section className="relative z-10 -mb-10 flex justify-center">
      <div className="flex items-center gap-3">
        <div className="-rotate-12 rounded-2xl bg-white p-4 text-black shadow-xl">
          <Play size={38} fill="currentColor" strokeWidth={1.5} />
        </div>

        <div className="translate-y-3 rotate-12 rounded-2xl border border-white/15 bg-[#303034] p-4 text-white shadow-xl">
          <NotebookPen size={38} strokeWidth={1.7} />
        </div>
      </div>
    </section>
  );
}
