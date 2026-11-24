
"use client";

import { useState } from "react";
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

  return (
    <aside
      className={`h-screen sticky top-0 shrink-0 border-r border-white/10 bg-[#090a0d] p-3 transition-all duration-300 ${
        collapsed ? "w-[76px]" : "w-[220px]"
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        {!collapsed && (
          <span className="font-bold text-xl">ClipNotes</span>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg text-white/60 hover:bg-white/10 hover:text-white transition"
        >
          {collapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>

      <nav className="flex flex-col gap-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center gap-1 rounded-xl py-3 text-white/60 hover:bg-white/10 hover:text-white transition ${
                collapsed ? "" : "flex-row justify-start px-3"
              }`}
            >
              <Icon size={21} />

              <span className={collapsed ? "text-[10px]" : "text-sm"}>
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
