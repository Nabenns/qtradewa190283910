"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: TrendingUp, label: "Sinyal Real-time" },
  { icon: Shield, label: "Analisis Terverifikasi" },
  { icon: Zap, label: "Update Instan" },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Top center glow */}
        <div className="absolute -top-40 left-1/2 h-[600px] w-[700px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        {/* Bottom left glow */}
        <div className="absolute -bottom-20 -left-40 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0ECECE 1px, transparent 1px), linear-gradient(to right, #0ECECE 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        {/* Announcement badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Platform Trading #1 untuk Trader Indonesia
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        >
          Raih Profit Konsisten
          <br />
          <span className="text-primary">Bersama QTrades</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Sinyal trading Forex, Komoditas, dan Indices yang akurat dari analis
          profesional. Dilengkapi edukasi terstruktur dan tools portfolio untuk
          trader serius.
        </motion.p>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <Icon size={12} className="text-primary" />
              {label}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-lg shadow-primary/20 transition-all duration-150 hover:scale-[1.02] hover:shadow-primary/30"
          >
            <Link href="/register">
              Mulai Sekarang
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-border text-foreground hover:bg-surface-elevated hover:border-primary/30 px-8 transition-all duration-150"
          >
            <Link href="#pricing">Lihat Paket Harga</Link>
          </Button>
        </motion.div>

        {/* Social proof micro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 text-xs text-muted-foreground"
        >
          Dipercaya oleh{" "}
          <span className="font-semibold text-foreground">500+</span> trader
          aktif · Win rate rata-rata{" "}
          <span className="font-semibold text-profit">73%</span>
        </motion.p>

        {/* Dashboard preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-full max-w-3xl"
        >
          <div className="relative rounded-2xl border border-border bg-surface shadow-2xl shadow-black/40 overflow-hidden">
            {/* Window bar */}
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#F75555]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#F5A623]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#0ECECE]" />
              <div className="ml-4 flex-1 rounded-full bg-surface-elevated px-3 py-1">
                <span className="text-xs text-muted-foreground">app.qtrades.id/dashboard/signals</span>
              </div>
            </div>

            {/* Mock content */}
            <div className="flex">
              {/* Sidebar mock */}
              <div className="hidden w-44 shrink-0 border-r border-border p-3 sm:block">
                <div className="mb-4 flex items-center gap-2 px-2">
                  <div className="h-5 w-5 rounded bg-primary/20" />
                  <div className="h-3 w-16 rounded bg-surface-elevated" />
                </div>
                {["Dashboard", "Sinyal", "Edukasi", "Portfolio", "Chart"].map((item, i) => (
                  <div
                    key={item}
                    className={`mb-1 flex items-center gap-2 rounded-lg px-2 py-2 ${i === 1 ? "bg-primary/10" : ""}`}
                  >
                    <div className={`h-3 w-3 rounded-sm ${i === 1 ? "bg-primary/60" : "bg-surface-elevated"}`} />
                    <div className={`h-2.5 rounded ${i === 1 ? "w-10 bg-primary/40" : "w-12 bg-surface-elevated"}`} />
                  </div>
                ))}
              </div>

              {/* Main area mock */}
              <div className="flex-1 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-28 rounded bg-surface-elevated" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 rounded-lg bg-primary/10 border border-primary/20" />
                    <div className="h-6 w-16 rounded-lg bg-surface-elevated" />
                  </div>
                </div>
                {/* Signal rows */}
                {[
                  { pair: "XAU/USD", type: "BUY", entry: "2,645.20", tp: "2,668.00", status: "open" },
                  { pair: "EUR/USD", type: "BUY", entry: "1.0842", tp: "1.0890", status: "hit_tp" },
                  { pair: "US100", type: "SELL", entry: "19,450", tp: "19,200", status: "open" },
                  { pair: "WTI/USD", type: "BUY", entry: "78.40", tp: "80.50", status: "hit_tp" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-1.5 w-1.5 rounded-full ${s.status === "open" ? "bg-warning-qt animate-pulse" : "bg-profit"}`} />
                      <span className="font-trading text-xs font-semibold text-foreground">{s.pair}</span>
                      <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${s.type === "BUY" ? "bg-profit/10 text-profit" : "bg-loss/10 text-loss"}`}>
                        {s.type}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-trading text-[10px] text-muted-foreground">Entry</p>
                        <p className="font-trading text-xs text-foreground">{s.entry}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-trading text-[10px] text-muted-foreground">TP</p>
                        <p className="font-trading text-xs text-profit">{s.tp}</p>
                      </div>
                      <div className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        s.status === "open"
                          ? "bg-warning-qt/10 text-warning-qt"
                          : "bg-profit/10 text-profit"
                      }`}>
                        {s.status === "open" ? "Open" : "✓ TP"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shadow glow below mockup */}
          <div className="mx-auto mt-1 h-8 w-3/4 rounded-full bg-primary/10 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
}
