"use client";

import Link from "next/link";
import { useState } from "react";
import { Play, Search, X } from "lucide-react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#090a0d]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">

        {searchOpen ? (
          <div className="flex items-center gap-3 w-full md:hidden">
            <Search size={20} className="text-white/50 shrink-0" />

            <input
              type="text"
              placeholder="Search videos..."
              autoFocus
              className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/40"
            />

            <button
              onClick={() => setSearchOpen(false)}
              className="text-white/60 hover:text-white"
            >
              <X size={21} />
            </button>
          </div>
        ) : (
          <>
            <Link href="/" className="flex items-center gap-x-2 shrink-0">
              <div className="bg-white text-black p-2 rounded-lg">
                <Play size={17} fill="currentColor" />
              </div>

              <span className="font-bold text-xl tracking-tight">
                ClipNotes
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 w-64">
                <Search size={17} className="text-white/40" />

                <input
                  type="text"
                  placeholder="Search videos..."
                  className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/40"
                />
              </div>

              <button
                onClick={() => setSearchOpen(true)}
                className="md:hidden p-2 text-white/70 hover:text-white transition"
              >
                <Search size={21} />
              </button>

              <Link
                href="/login"
                className="text-sm text-white/70 hover:text-white transition"
              >
                Sign in
              </Link>

              <Link
                href="/signup"
                className="bg-white text-black text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-white/85 transition"
              >
                Get started
              </Link>
            </div>
          </>
        )}

      </div>
    </nav>
  );
}