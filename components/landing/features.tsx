"use client";

import { motion } from "framer-motion";
import { TrendingUp, BookOpen, BarChart2, LineChart, Users, Bell } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Sinyal Trading Akurat",
    description:
      "Sinyal Forex, Komoditas (Minyak, Gas), dan Indices (US100, SP500) dengan entry, SL, TP1–TP3, dan RR ratio lengkap dari analis berpengalaman.",
    highlight: "Forex · Komoditas · Indices",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: BookOpen,
    title: "Edukasi Terstruktur",
    description:
      "Modul pembelajaran dari basic hingga advanced. Video eksklusif, PDF, dan worksheet yang dirancang khusus untuk trader Indonesia.",
    highlight: "Basic → Advanced",
    color: "text-[#388BFD]",
    bg: "bg-[#388BFD]/10",
    border: "border-[#388BFD]/20",
  },
  {
    icon: BarChart2,
    title: "Portfolio Tracker",
    description:
      "Catat semua trade kamu dan lihat performa real: total P&L, win rate, drawdown, profit factor, dan equity curve yang terupdate otomatis.",
    highlight: "P&L · Win Rate · Drawdown",
    color: "text-profit",
    bg: "bg-profit/10",
    border: "border-profit/20",
  },
  {
    icon: LineChart,
    title: "Live Chart & Analisis",
    description:
      "Embed TradingView dengan market overview, heatmap, economic calendar, dan analisis teknikal langsung dari tim QTrades.",
    highlight: "TradingView Powered",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
  {
    icon: Users,
    title: "Program Referral",
    description:
      "Dapatkan komisi setiap kali teman kamu bergabung menggunakan kode referralmu. Komisi cair ke rekening bank kamu.",
    highlight: "Komisi Otomatis",
    color: "text-[#F5A623]",
    bg: "bg-[#F5A623]/10",
    border: "border-[#F5A623]/20",
  },
  {
    icon: Bell,
    title: "Notifikasi Instan",
    description:
      "Tidak ada sinyal yang terlewat. Notifikasi in-app dan email langsung ke kamu saat sinyal baru dipublikasikan.",
    highlight: "Real-time Alert",
    color: "text-profit",
    bg: "bg-profit/10",
    border: "border-profit/20",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Fitur Platform
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Semua yang kamu butuhkan
            <br />
            <span className="text-primary">dalam satu platform</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Dari sinyal trading hingga edukasi dan tools analisis — QTrades
            memberikan ekosistem lengkap untuk trader profesional.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-hover group rounded-2xl border border-border bg-surface p-6"
            >
              <div className={`inline-flex rounded-xl border p-2.5 ${feat.bg} ${feat.border}`}>
                <feat.icon size={20} className={feat.color} />
              </div>

              <h3 className="mt-4 text-base font-semibold text-foreground">
                {feat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feat.description}
              </p>

              <div className={`mt-4 inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${feat.bg} ${feat.border} ${feat.color}`}>
                {feat.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
