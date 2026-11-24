"use client";

import Link from "next/link";
import { useState } from "react";
import { Play, Search, X, Menu } from "lucide-react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="sticky top-0 z-30 border-b border-white/10 bg-[#090a0d]/50 backdrop-blur-xl">
      <div className="w-full mx-auto px-5 md:px-8 py-4 flex items-center justify-between gap-4">

        {searchOpen ? (
          <div className="flex items-center gap-3 w-full md:hidden">
            <Search size={20} className="text-white/50 shrink-0" />

            <input
              type="text"
              placeholder="Search videos..."
              autoFocus
              className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/40"
            />

            <button onClick={() => setSearchOpen(false)}>
              <X size={21} />
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3">
             {
                loggedIn &&
                 <button
                 onClick={() => window.dispatchEvent(new Event("open-sidebar"))}
                 className="md:hidden p-2 -ml-2 text-white/70 hover:text-white"
                 >
                <Menu size={21} />
              </button>
            }
              <Link href="/" className="flex items-center gap-x-2">
                <div className="bg-white text-black p-2 rounded-lg">
                  <Play size={10} fill="currentColor" />
                </div>

                <span className="font-bold text-lg md:text-xl tracking-tight">
                  ClipNotes
                </span>
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {loggedIn ? (
                <>
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
                    className="md:hidden p-2 text-white/70 hover:text-white"
                  >
                    <Search size={21} />
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    Sign in
                  </Link>

                  <Link
                    href="/"
                    className="bg-white text-black text-sm font-semibold md:px-4 md:py-2.5 p-2 rounded-full hover:bg-white/85 transition"
                    onClick={() => setLoggedIn(true)}
                  >
                    Get started
                  </Link>
                </>
              )}
            </div>
          </>
        )}

      </div>
    </nav>
  );
}