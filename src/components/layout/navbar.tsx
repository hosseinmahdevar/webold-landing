"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-indigo-500/10 bg-[#0B0D13]/85 backdrop-blur-xl transition-all">
      {/* Top micro border light with indigo tone */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent pointer-events-none" />

      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1 transition-transform"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-mono font-bold text-base shadow-[0_0_20px_rgba(99,102,241,0.45)] transition-transform duration-300 group-hover:scale-105">
            W
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-white text-base leading-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-mono text-indigo-300 uppercase tracking-widest leading-none mt-0.5">
              {siteConfig.domain}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-indigo-500/15 bg-[#131622]/80 px-3 py-1 backdrop-blur-md">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-neutral-300 hover:text-white hover:bg-indigo-500/15 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button & Live Status */}
        <div className="hidden md:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-950/50 border border-indigo-500/25 text-indigo-300 text-[11px] font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>۲ پروژه در اسپرینت جاری</span>
          </div>

          <Link href="/#intake">
            <Button size="sm" variant="primary">
              <span>استعلام پروژه</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex h-11 w-11 items-center justify-center rounded-lg border border-indigo-500/20 bg-[#131622] text-neutral-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-indigo-500/15 bg-[#10131E]/95 backdrop-blur-2xl px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/50 border border-indigo-500/25 text-indigo-300 text-xs font-mono mb-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>{siteConfig.availabilityStatus}</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-neutral-300 hover:text-white hover:bg-indigo-500/15 rounded-lg px-3 py-2.5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-indigo-500/10">
            <Link href="/#intake" onClick={() => setIsOpen(false)}>
              <Button size="md" variant="primary" className="w-full justify-center">
                <Sparkles className="h-4 w-4" />
                <span>شروع پروژه و برآورد هزینه</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
