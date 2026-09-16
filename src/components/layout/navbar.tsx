"use client";

import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-mono font-bold text-base transition-transform group-hover:scale-105">
            W
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-tight text-white text-base">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest -mt-0.5">
              {siteConfig.domain}
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/#intake">
            <Button size="sm" variant="primary">
              <span>استعلام پروژه</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-neutral-300 hover:text-white"
          aria-label="منو"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-neutral-950 px-5 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base text-neutral-300 hover:text-white py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link href="/#intake" onClick={() => setIsOpen(false)}>
              <Button size="md" variant="primary" className="w-full">
                <span>استعلام و شروع پروژه</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
