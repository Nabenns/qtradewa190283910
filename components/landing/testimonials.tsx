"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rizky A.",
    role: "Swing Trader · Member Tahunan",
    avatar: "RA",
    content:
      "Sinyal XAU/USD dari QTrades konsisten. Dalam 3 bulan pertama win rate gue naik dari 45% jadi 68%. Materinya juga lengkap banget, bukan cuma sinyal doang.",
    rating: 5,
    profit: "+Rp 8.4 juta",
  },
  {
    name: "Dian S.",
    role: "Part-time Trader · Member Lifetime",
    avatar: "DS",
    content:
      "Akhirnya nemu komunitas trading yang serius. Adminnya aktif, sinyal detail ada entry SL TP semua. Portfolio tracker-nya juga bantu gue lebih disiplin.",
    rating: 5,
    profit: "+Rp 12.1 juta",
  },
  {
    name: "Budi H.",
    role: "Forex Trader · Member Tahunan",
    avatar: "BH",
    content:
      "Udah coba beberapa komunitas trading lain, QTrades yang paling transparan. Win rate-nya dipublish lengkap, bisa ditrack sendiri. Bukan asal klaim.",
    rating: 5,
    profit: "+Rp 5.7 juta",
  },
  {
    name: "Sari W.",
    role: "Indices Trader · Member Bulanan",
    avatar: "SW",
    content:
      "US100 signal-nya on point. Langsung profitable di bulan pertama. Edukasi-nya juga bagus buat yang baru mulai belajar indices.",
    rating: 5,
    profit: "+Rp 3.2 juta",
  },
  {
    name: "Arif M.",
    role: "Commodities Trader · Member Tahunan",
    avatar: "AM",
    content:
      "Notifikasi sinyal cepet banget, gak pernah ketinggalan entry. Platform-nya smooth, chart TradingView embedded langsung jadi gak perlu buka banyak tab.",
    rating: 5,
    profit: "+Rp 6.8 juta",
  },
  {
    name: "Nita P.",
    role: "Full-time Trader · Member Lifetime",
    avatar: "NP",
    content:
      "Investasi terbaik yang pernah gue lakuin di trading. ROI dari membership ini balik dalam 2 minggu. Lifetime purchase is the best decision.",
    rating: 5,
    profit: "+Rp 22.5 juta",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-surface overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Testimoni Member
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Dibuktikan oleh{" "}
            <span className="text-primary">ratusan trader</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Profit nyata dari member aktif QTrades. Semua testimoni dapat diverifikasi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="card-hover flex flex-col rounded-2xl border border-border bg-background p-5"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    className="fill-[#F5A623] text-[#F5A623]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Profit badge */}
              <div className="mt-4 inline-flex w-fit items-center rounded-full bg-profit/10 px-2.5 py-1 text-xs font-semibold text-profit">
                {t.profit} profit
              </div>

              {/* Author */}
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
