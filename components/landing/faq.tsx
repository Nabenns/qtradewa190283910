"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Apakah sinyal QTrades dijamin profit?",
    a: "Tidak ada jaminan profit di dunia trading. Sinyal QTrades dibuat oleh analis berpengalaman dengan analisis teknikal yang cermat, namun trading selalu mengandung risiko. Win rate kami rata-rata 73%, namun hasil individual dapat berbeda. Selalu kelola risiko dengan bijak.",
  },
  {
    q: "Berapa lama membership aktif setelah pembayaran?",
    a: "Membership aktif instan setelah pembayaran dikonfirmasi oleh sistem. Untuk transfer bank manual, aktivasi maksimal 1×24 jam setelah konfirmasi diterima. Untuk VA, QRIS, dan e-wallet, aktivasi otomatis dalam hitungan menit.",
  },
  {
    q: "Bagaimana cara mendapatkan sinyal trading?",
    a: "Setelah membership aktif, kamu bisa mengakses feed sinyal di dashboard. Kamu juga akan mendapat notifikasi in-app dan email setiap kali sinyal baru dipublikasikan. Sinyal mencakup pair, tipe (BUY/SELL), entry, SL, TP1-TP3, timeframe, dan catatan analis.",
  },
  {
    q: "Aset apa saja yang ada sinyalnya?",
    a: "QTrades menyediakan sinyal untuk 3 kategori: Forex (EUR/USD, GBP/USD, XAU/USD, dll), Komoditas (Minyak/WTI, Gas Alam, dll), dan Indices (US100/Nasdaq, SP500, dll).",
  },
  {
    q: "Apakah ada refund jika tidak puas?",
    a: "Untuk paket Bulanan, tidak ada refund setelah membership diaktifkan. Kami menyarankan untuk melihat sinyal dan rekam jejak kami di halaman publik sebelum berlangganan. Jika ada kendala teknis dari sisi platform, kami akan menangani kasus per kasus.",
  },
  {
    q: "Bagaimana cara kerja program referral?",
    a: "Setiap member mendapat kode referral unik. Jika seseorang mendaftar menggunakan kode kamu dan melakukan pembayaran, kamu otomatis mendapat komisi yang dikonfigurasi sesuai paket. Komisi dapat dicairkan setelah mencapai minimum saldo ke rekening bank kamu.",
  },
  {
    q: "Bisa upgrade dari Bulanan ke Tahunan atau Lifetime?",
    a: "Ya, kamu bisa upgrade kapan saja dari dashboard billing. Harga akan diperhitungkan secara prorata dari sisa membership yang ada. Untuk detail teknis upgrade, hubungi tim support kami.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Pertanyaan yang sering ditanyakan
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`rounded-xl border transition-colors duration-200 ${
                open === i
                  ? "border-primary/30 bg-surface"
                  : "border-border bg-surface hover:border-border/80"
              }`}
            >
              <button
                className="flex w-full items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-foreground pr-4">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown
                    size={16}
                    className={open === i ? "text-primary" : "text-muted-foreground"}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
