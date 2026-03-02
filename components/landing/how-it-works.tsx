"use client";

import { motion } from "framer-motion";
import { UserPlus, CreditCard, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Daftar Akun",
    description:
      "Buat akun QTrades dengan email kamu. Proses registrasi cepat, kurang dari 2 menit.",
  },
  {
    step: "02",
    icon: CreditCard,
    title: "Pilih Paket",
    description:
      "Pilih paket membership yang sesuai. Bayar via Transfer Bank, QRIS, GoPay, OVO, atau Dana.",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Mulai Trading",
    description:
      "Akses dashboard, pantau sinyal real-time, pelajari materi, dan catat performa trading kamu.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Cara Kerja
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Mulai dalam <span className="text-primary">3 langkah mudah</span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon circle */}
              <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-primary/20 bg-background shadow-lg shadow-black/20">
                <step.icon size={28} className="text-primary" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {step.step}
                </span>
              </div>

              <h3 className="mt-6 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
