"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Bulanan",
    price: "299.000",
    period: "/bulan",
    description: "Cocok untuk mencoba platform QTrades",
    popular: false,
    features: [
      "Semua sinyal Forex, Komoditas & Indices",
      "Akses materi edukasi penuh",
      "Portfolio tracker",
      "Live chart TradingView",
      "Notifikasi sinyal (in-app + email)",
      "Dashboard performa trading",
      "Kode referral & komisi",
    ],
  },
  {
    name: "Tahunan",
    price: "1.999.000",
    period: "/tahun",
    description: "Hemat lebih dari 40% dibanding bulanan",
    popular: true,
    savings: "Hemat Rp 1.589.000",
    features: [
      "Semua fitur paket Bulanan",
      "Prioritas notifikasi sinyal",
      "Akses materi eksklusif tahunan",
      "Analisis teknikal mingguan",
      "Konsultasi sinyal via grup member",
      "Badge member premium",
      "Kode referral & komisi",
    ],
  },
  {
    name: "Lifetime",
    price: "4.999.000",
    period: "selamanya",
    description: "Bayar sekali, akses selamanya",
    popular: false,
    features: [
      "Semua fitur paket Tahunan",
      "Akses semua konten baru selamanya",
      "Grup VIP eksklusif lifetime",
      "Early access fitur baru",
      "Komisi referral lebih tinggi",
      "Badge member lifetime",
      "Dukungan prioritas",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            Harga
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Investasi terbaik untuk
            <br />
            <span className="text-primary">karir trading kamu</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tanpa biaya tersembunyi. Akses penuh semua fitur dari hari pertama.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-6 ${
                plan.popular
                  ? "border-primary/40 bg-surface shadow-xl shadow-primary/10"
                  : "border-border bg-surface"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-semibold px-3 py-1 shadow-lg shadow-primary/30">
                    <Zap size={11} className="mr-1" />
                    Paling Populer
                  </Badge>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-base font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {plan.description}
                </p>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-xs font-medium text-muted-foreground">Rp</span>
                  <span className="font-trading text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="mb-0.5 text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                {plan.savings && (
                  <div className="mt-2 inline-flex items-center rounded-full bg-profit/10 px-2.5 py-0.5 text-xs font-medium text-profit">
                    {plan.savings}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={14}
                      className="mt-0.5 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                asChild
                className={`w-full font-semibold transition-all duration-150 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:scale-[1.02]"
                    : "border-border bg-transparent text-foreground hover:bg-surface-elevated"
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href="/register">
                  {plan.name === "Lifetime" ? "Beli Lifetime Access" : `Daftar Paket ${plan.name}`}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-xs text-muted-foreground"
        >
          Pembayaran aman via Midtrans · Transfer Bank, QRIS, GoPay, OVO, Dana ·
          Membership aktif instan setelah pembayaran dikonfirmasi
        </motion.p>
      </div>
    </section>
  );
}
