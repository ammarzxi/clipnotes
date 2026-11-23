
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  House,
  Library,
  Search,
  Clock,
  Layers,
  Layers2,
  PanelLeftClose,
  PanelLeftOpen,
  Menu,
  X,
} from "lucide-react";

const links = [
  { name: "Home", href: "/", icon: House },
  { name: "Library", href: "/library", icon: Library },
  { name: "Search", href: "/search", icon: Search },
  { name: "History", href: "/history", icon: Clock },
  { name: "Collections", href: "/collections", icon: Layers },
  { name: "Flashcards", href: "/flashcards", icon: Layers2 },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
  const openSidebar = () => setMobileOpen(true);

  window.addEventListener("open-sidebar", openSidebar);

  return () => {
    window.removeEventListener("open-sidebar", openSidebar);
  };
  }, []);

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4.5 left-4 z-40 md:hidden p-2 rounded-lg bg-[#090a0d] border border-white/10"
      >
        <Menu size={21} />
      </button>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:sticky top-4 left-0 z-50 md:z-30
          h-screen shrink-0 border-r border-white/10
          bg-[#090a0d] p-3 transition-all duration-300
          w-[220px]
          ${collapsed ? "md:w-[88px]" : "md:w-[220px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between mb-8">
          {!collapsed && (
            <span className="font-bold text-xl">ClipNotes</span>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden md:block p-2 rounded-lg text-white/60 hover:bg-white/10 hover:text-white transition"
            >
              {collapsed ? (
                <PanelLeftOpen size={20} />
              ) : (
                <PanelLeftClose size={20} />
              )}
            </button>

            <button
              onClick={() => setMobileOpen(false)}
              className="md:hidden p-2 rounded-lg text-white/60 hover:bg-white/10"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="flex flex-col gap-2">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-xl py-3 px-3 text-white/60 hover:bg-white/10 hover:text-white transition ${
                  collapsed ? "md:flex-col md:gap-1 md:px-1" : ""
                }`}
              >
                <Icon size={21} />

                <span className={collapsed ? "md:text-[10px] text-sm" : "text-sm"}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
