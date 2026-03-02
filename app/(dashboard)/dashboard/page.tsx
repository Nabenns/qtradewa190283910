"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, CreditCard, BarChart2 } from "lucide-react";

const stats = [
  {
    label: "Sinyal Aktif",
    value: "12",
    sub: "3 baru hari ini",
    icon: TrendingUp,
    color: "text-profit",
    bg: "bg-profit/10",
  },
  {
    label: "Win Rate",
    value: "73%",
    sub: "30 hari terakhir",
    icon: BarChart2,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "Total P&L",
    value: "+$1,240",
    sub: "Portfolio bulan ini",
    icon: CreditCard,
    color: "text-profit",
    bg: "bg-profit/10",
  },
  {
    label: "Referral",
    value: "5",
    sub: "Member via kode kamu",
    icon: Users,
    color: "text-warning-qt",
    bg: "bg-warning-qt/10",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function DashboardPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={item}>
        <h1 className="text-2xl font-bold text-foreground">Selamat datang 👋</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Membership aktif · Expired 1 April 2026
        </p>
      </motion.div>

      {/* Stats grid */}
      <motion.div
        variants={item}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card-hover rounded-2xl border border-border bg-surface p-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className={`mt-2 font-trading text-2xl font-semibold ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
              </div>
              <div className={`rounded-xl p-2.5 ${stat.bg}`}>
                <stat.icon size={18} className={stat.color} />
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Placeholder sections */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          variants={item}
          className="lg:col-span-2 rounded-2xl border border-border bg-surface p-5"
        >
          <h3 className="text-sm font-semibold text-foreground">Sinyal Terbaru</h3>
          <div className="mt-4 space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="shimmer h-14 rounded-xl" />
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="rounded-2xl border border-border bg-surface p-5"
        >
          <h3 className="text-sm font-semibold text-foreground">Status Membership</h3>
          <div className="mt-4 space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="shimmer h-10 rounded-xl" />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
