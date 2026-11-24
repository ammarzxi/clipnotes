
import Link from "next/link";
import { Play } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090a0d]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-x-2 w-fit">
              <div className="bg-white text-black p-2 rounded-lg">
                <Play size={17} fill="currentColor" />
              </div>

              <span className="font-bold text-xl">
                ClipNotes
              </span>
            </Link>

            <p className="text-sm text-white/45 mt-4 leading-6">
              Turn videos into organized notes, searchable knowledge
              and a better learning experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">

            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Explore</h3>

              <div className="flex flex-col gap-3 text-sm text-white/50">
                <Link href="#features" className="hover:text-white transition">
                  Features
                </Link>

                <Link href="#workspace" className="hover:text-white transition">
                  Workspace
                </Link>

                <Link href="#how-it-works" className="hover:text-white transition">
                  How it works
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Account</h3>

              <div className="flex flex-col gap-3 text-sm text-white/50">
                <Link href="/login" className="hover:text-white transition">
                  Sign in
                </Link>

                <Link href="/signup" className="hover:text-white transition">
                  Get started
                </Link>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/35">
          <p>© {new Date().getFullYear()} ClipNotes. All rights reserved.</p>
          <p>Built for curious minds.</p>
        </div>

      </div>
    </footer>
  );
}
