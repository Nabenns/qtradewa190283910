"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Member Aktif", value: "500+" },
  { label: "Win Rate", value: "73%" },
  { label: "Sinyal", value: "1200+" },
];

function QTradesLogo({ size = "lg" }: { size?: "sm" | "lg" }) {
  if (size === "sm") {
    return (
      <Link href="/" className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
          Q
        </div>
        <span className="text-lg font-bold tracking-tight text-foreground">
          qtrades
        </span>
      </Link>
    );
  }

  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
        Q
      </div>
      <span className="text-2xl font-bold tracking-tight text-foreground">
        qtrades
      </span>
    </Link>
  );
}

function LeftPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hidden lg:flex w-[45%] flex-col justify-between bg-surface border-r border-border p-12"
    >
      <div>
        <QTradesLogo size="lg" />
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold leading-tight text-foreground">
            Trading lebih
            <br />
            <span className="text-primary">cerdas.</span>
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
            Bergabunglah dengan komunitas trader profesional Indonesia. Dapatkan
            sinyal akurat, edukasi komprehensif, dan tools trading terbaik.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-surface-elevated p-4 space-y-1"
            >
              <p className="text-2xl font-bold text-primary font-trading">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} QTrades. All rights reserved.
      </div>
    </motion.div>
  );
}

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <LeftPanel />

      <div className="flex flex-1 flex-col">
        {/* Mobile logo */}
        <div className="flex lg:hidden items-center p-6 border-b border-border">
          <QTradesLogo size="sm" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="flex flex-1 items-center justify-center p-6"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
