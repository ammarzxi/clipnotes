
import Link from "next/link";
import { Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/10 bg-[#090a0d]">
      <div className="w-full px-8 py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="flex w-fit items-center gap-x-2">
              <div className="rounded-lg bg-white p-2 text-black">
                <Play size={17} fill="currentColor" />
              </div>

              <span className="text-xl font-bold">ClipNotes</span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-white/45">
              Turn videos into organized notes, searchable knowledge
              and a better learning experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Explore</h3>

              <div className="flex flex-col gap-3 text-sm text-white/50">
                <Link href="#features" className="transition hover:text-white">
                  Features
                </Link>

                <Link href="#workspace" className="transition hover:text-white">
                  Workspace
                </Link>

                <Link href="#how-it-works" className="transition hover:text-white">
                  How it works
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Account</h3>

              <div className="flex flex-col gap-3 text-sm text-white/50">
                <Link href="/login" className="transition hover:text-white">
                  Sign in
                </Link>

                <Link href="/signup" className="transition hover:text-white">
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      <div className="relative mt-8">
        <div className="pointer-events-none absolute -bottom-20 left-1/2 h-64 w-full -translate-x-1/2 rounded-full bg-white/20 blur-[90px]" />
        <h2 className="relative whitespace-nowrap text-center text-[clamp(4rem,16vw,15rem)] font-bold leading-none tracking-[-0.07em] text-[#f5f5f5]">
          ClipNotes
        </h2>
      </div>
        <div className="mt-12 pb-6 px-6 flex flex-col justify-between gap-3 border-white/10 pt-6 text-xs text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} ClipNotes. All rights reserved.</p>
          <p>Built By <a className="underline pointer-cursor" href="https://github.com/ammarzxi" target="/blank">Ammar</a></p>
        </div>
    </footer>
  );
}
