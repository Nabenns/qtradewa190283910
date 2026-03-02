import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Platform: [
    { label: "Sinyal Trading", href: "#features" },
    { label: "Edukasi", href: "#features" },
    { label: "Portfolio Tracker", href: "#features" },
    { label: "Live Chart", href: "#features" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "/about" },
    { label: "Harga", href: "#pricing" },
    { label: "Kontak", href: "/about" },
  ],
  Legal: [
    { label: "Syarat & Ketentuan", href: "/terms" },
    { label: "Kebijakan Privasi", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <span className="text-sm font-bold text-primary">Q</span>
              </div>
              <span className="text-base font-bold tracking-tight text-foreground">
                qtrades
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Platform membership trading Forex, Komoditas, dan Indices untuk
              trader Indonesia yang serius.
            </p>
            <p className="mt-4 text-xs text-muted-foreground/60">
              ⚠️ Trading mengandung risiko. Sinyal bukan rekomendasi finansial.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 QTrades. Semua hak dilindungi.</p>
          <p>Made in Indonesia 🇮🇩</p>
        </div>
      </div>
    </footer>
  );
}
