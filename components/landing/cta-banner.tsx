"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-10 text-center shadow-xl shadow-primary/5 md:p-14"
        >
          {/* Background decoration */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/8 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Daftar sekarang · Aktif instan
            </span>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Siap memulai perjalanan
              <br />
              <span className="text-primary">trading yang lebih baik?</span>
            </h2>

            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Bergabunglah dengan 500+ trader aktif yang sudah membuktikan
              manfaat QTrades. Daftar hari ini dan mulai akses sinyal trading
              profesional.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-lg shadow-primary/25 transition-all hover:scale-[1.02] hover:shadow-primary/35"
              >
                <Link href="/register">
                  Daftar Sekarang
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-border hover:bg-surface-elevated hover:border-primary/30 px-8"
              >
                <Link href="#pricing">Lihat Paket</Link>
              </Button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Mulai dari Rp 299.000/bulan · Bayar via QRIS, GoPay, OVO, Dana,
              Transfer Bank
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
