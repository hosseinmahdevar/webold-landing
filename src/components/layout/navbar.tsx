"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-lime-600/15 dark:border-lime-400/10 bg-white/85 dark:bg-[#080B09]/85 backdrop-blur-xl transition-colors duration-300">
      {/* Top micro border light with pistachio tone */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-lime-500/30 dark:via-lime-400/40 to-transparent pointer-events-none" />

      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-4 sm:px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 rounded-lg p-1 transition-transform"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-lime-600 dark:bg-[#A3E635] text-white dark:text-[#06180A] font-mono font-bold text-base shadow-[0_0_20px_rgba(163,230,53,0.35)] transition-transform duration-300 group-hover:scale-105">
            W
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-[#0E1F12] dark:text-white text-base leading-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-mono text-lime-700 dark:text-lime-300 uppercase tracking-widest leading-none mt-0.5 font-medium">
              {siteConfig.domain}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-lime-600/15 dark:border-lime-400/15 bg-lime-50/50 dark:bg-[#0F1612]/80 px-3 py-1 backdrop-blur-md">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-lime-700 dark:hover:text-[#A3E635] hover:bg-lime-100/60 dark:hover:bg-lime-400/10 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button, Theme Toggle & Live Status */}
        <div className="hidden md:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-lime-50 dark:bg-lime-950/50 border border-lime-300 dark:border-lime-500/25 text-lime-800 dark:text-lime-300 text-[11px] font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-600 dark:bg-lime-400" />
            </span>
            <span>۲ پروژه در اسپرینت جاری</span>
          </div>

          <ThemeToggle />

          <Link href="/#intake">
            <Button size="sm" variant="primary">
              <span>استعلام پروژه</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile View: Theme Toggle + Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-lime-600/20 dark:border-lime-400/20 bg-lime-50/50 dark:bg-[#0F1612] text-[#0E1F12] dark:text-neutral-200 hover:text-lime-700 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
            aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-lime-600/15 dark:border-lime-400/15 bg-white/95 dark:bg-[#0D140F]/95 backdrop-blur-2xl px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-lime-50 dark:bg-lime-950/50 border border-lime-300 dark:border-lime-500/25 text-lime-800 dark:text-lime-300 text-xs font-mono mb-2">
            <span className="h-2 w-2 rounded-full bg-lime-500 animate-pulse" />
            <span>{siteConfig.availabilityStatus}</span>
          </div>

          <nav className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-neutral-800 dark:text-neutral-300 hover:text-lime-700 dark:hover:text-[#A3E635] hover:bg-lime-50 dark:hover:bg-lime-400/10 rounded-lg px-3 py-2.5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-lime-600/10 dark:border-lime-400/10">
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
