# Product Requirements Document (PRD)
## QTrades — Platform Komunitas Trading Indonesia

**Versi:** 1.1
**Tanggal:** 2 Maret 2026
**Status:** Draft

---

## 1. Overview

### 1.1 Latar Belakang
QTrades adalah platform berbasis membership untuk komunitas trading di Indonesia. Platform ini menyediakan akses ke sinyal trading, materi edukasi, tools analisis portofolio, dan live chart bagi para trader. Revenue utama berasal dari subscription bulanan/tahunan.

### 1.2 Tujuan Produk
- Membangun platform membership trading yang profesional dan terpercaya
- Memberikan nilai nyata kepada member melalui sinyal trading akurat dan edukasi berkualitas
- Menyederhanakan proses pembayaran dan manajemen member untuk tim internal
- Menyediakan admin panel yang powerful untuk operasional sehari-hari

### 1.3 Target Pengguna

| Tipe User | Deskripsi |
|-----------|-----------|
| **Visitor** | Calon member yang belum mendaftar, melihat landing page |
| **Member** | Subscriber aktif yang memiliki akses penuh ke platform |
| **Member Expired** | Member dengan membership kedaluwarsa, akses terbatas |
| **Affiliate** | Member yang aktif mereferensikan orang lain, dapat komisi |
| **Admin** | Tim internal QTrades yang mengelola konten dan member |
| **Super Admin** | Founder/pengelola utama dengan akses penuh |

---

## 2. Scope & Fitur

### 2.1 Fitur Utama (MVP)

#### 🌐 Public Pages
- Landing page (hero, fitur, harga, testimonial, FAQ)
- Halaman pricing / paket membership
- Halaman login & register
- Halaman about / tim
- Blog/artikel publik (opsional v1)

#### 👤 Auth & Membership
- Register dengan email + password (support referral code saat register)
- Login, logout, forgot password, reset password
- Email verification
- Paket membership: Bulanan / Tahunan / Lifetime (dapat dikonfigurasi di admin)
- Halaman status membership (aktif, expired)
- Tidak ada free trial — semua akses hanya untuk member berbayar aktif

#### 💳 Payment Gateway (Midtrans / Xendit)
- Pemilihan paket dan checkout
- Payment via: Transfer Bank, Virtual Account, QRIS, GoPay, OVO, Dana
- Otomasi aktivasi membership setelah pembayaran dikonfirmasi (webhook)
- Riwayat transaksi member
- Invoice otomatis via email
- Perpanjangan membership manual & otomatis (auto-renewal)
- Notifikasi 3 hari & 1 hari sebelum expired

#### 📊 Dashboard Member
- Overview: status membership, tanggal expired, info akun
- **Sinyal Trading**
  - Feed sinyal terbaru untuk 3 kategori aset:
    - **Forex** (EUR/USD, GBP/USD, XAU/USD, dll)
    - **Komoditas** (Minyak/WTI, Gas Alam, dll)
    - **Indices** (US100/Nasdaq, SP500, dll)
  - Detail sinyal: pair/aset, entry, SL, TP1/TP2/TP3, RR ratio, timeframe, status (open/hit TP/hit SL/cancelled)
  - Filter berdasarkan kategori aset, status, tanggal
  - Notifikasi sinyal baru (in-app + email)
  - Riwayat sinyal + win rate statistik per kategori
- **Materi & Edukasi**
  - Modul pembelajaran terstruktur (basic → advanced)
  - Video player embed Vimeo (private/unlisted, akses dikontrol dari sisi platform)
  - File download (PDF, worksheet)
  - Progress tracking per modul
  - Akses dikontrol berdasarkan tier membership
- **Portfolio Tracker**
  - Input manual trade (pair, lot, entry, exit, profit/loss)
  - Dashboard performa: total P&L, win rate, drawdown, profit factor
  - Grafik equity curve
  - Export laporan (CSV/PDF)
- **Live Chart & Analytics**
  - Embed TradingView chart (free widget atau premium)
  - Market overview: heatmap, top movers
  - Economic calendar
  - Analisis teknikal oleh tim QTrades (post/artikel)
- **Referral & Affiliate**
  - Kode referral unik per member
  - Link referral siap share (shortenened URL)
  - Dashboard komisi: total earned, pending, sudah cair
  - List siapa saja yang berhasil join via kode kamu
  - Cara pencairan komisi & syarat minimum

#### 🛠️ Admin Panel
- **Dashboard Admin**
  - Total member aktif, revenue bulan ini, member baru, churn rate
  - Grafik pertumbuhan member dan revenue
- **Manajemen Member**
  - List member + status (aktif/expired/trial/banned)
  - Detail member: info akun, riwayat pembayaran, log aktivitas
  - Edit manual: perpanjang membership, ganti paket, reset password
  - Export data member (CSV)
- **Manajemen Sinyal (Manual)**
  - Form tambah sinyal: pair/aset, kategori, entry, SL, TP1/TP2/TP3, RR ratio, timeframe, catatan
  - Edit sinyal yang sudah dipublikasikan (jika ada koreksi)
  - Set status sinyal: open → hit TP / hit SL / cancelled
  - Kirim notifikasi ke semua member saat sinyal baru dipublikasikan
  - Hapus sinyal
- **Manajemen Konten**
  - CRUD materi/modul edukasi
  - Upload & kelola video, PDF, gambar
  - Atur urutan dan akses tier materi
  - CRUD blog/artikel
- **Manajemen Paket & Harga**
  - CRUD paket membership (nama, harga, durasi, fitur, diskon)
  - Aktif/nonaktifkan paket
  - Kupon diskon (persentase / nominal, batas penggunaan, tanggal berlaku)
- **Manajemen Transaksi**
  - List semua transaksi + status (pending, success, failed, refund)
  - Detail transaksi + bukti pembayaran
  - Konfirmasi manual pembayaran (untuk transfer manual)
  - Refund & pembatalan
- **Manajemen Referral & Affiliate**
  - List semua affiliate: member, kode referral, total referral, total komisi
  - Detail komisi per affiliate: siapa yang direferensikan, kapan bergabung, kapan komisi cair
  - Approval pencairan komisi (manual transfer)
  - Blacklist/suspend affiliate yang abuse sistem
- **Pengaturan Komisi Referral**
  - Pilih tipe komisi: persentase (%) atau nominal flat (Rp)
  - Set nilai komisi per paket (bisa beda-beda per paket)
  - Set minimum saldo sebelum bisa request pencairan
  - Aktif/nonaktifkan program referral secara keseluruhan
- **Pengaturan**
  - Konfigurasi payment gateway (API key Midtrans/Xendit)
  - Konfigurasi email (SMTP / email service)
  - Konfigurasi komisi referral (lihat Pengaturan Komisi Referral)
  - Kelola halaman statis (about, FAQ, syarat & ketentuan)
  - Pengaturan notifikasi & webhook

---

## 3. User Stories

### Member

```
Sebagai member, saya ingin...
- melihat sinyal trading terbaru (Forex, Komoditas, Indices) agar bisa eksekusi tepat waktu
- mendapat notifikasi push/email saat sinyal baru masuk
- melacak semua trade saya agar tahu performa trading saya
- mengakses materi edukasi untuk meningkatkan skill trading
- melihat status dan tanggal expired membership saya
- memperpanjang membership dengan mudah melalui berbagai metode bayar
- mengunduh invoice pembayaran saya
- membagikan kode referral saya dan melihat berapa komisi yang sudah saya kumpulkan
- mencairkan komisi referral saya ketika sudah memenuhi minimum
```

### Admin

```
Sebagai admin, saya ingin...
- melihat dashboard ringkasan bisnis setiap hari
- menambah, mengedit, dan menutup sinyal trading dengan cepat
- mengelola member yang expired atau bermasalah
- mengupload materi edukasi baru dengan mudah
- melihat status semua transaksi dan mengonfirmasi pembayaran manual
- membuat kupon diskon untuk promo tertentu
- melihat laporan affiliate dan approve pencairan komisi
```

---

## 4. Design System

### 4.1 Design Direction
**Dark Modern** — dark background deep, aksen teal/cyan dari logo, tampilan bersih dan profesional. Animasi subtle untuk feedback interaksi, bukan dekorasi. Referensi: TradingView, Linear, Vercel dashboard.

### 4.2 Color Palette

> Palette diambil dari identitas logo QTrades (background gelap + aksen teal-cyan).

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `background` | `#0A0C10` | Background halaman utama |
| `surface` | `#111318` | Card, sidebar, modal |
| `surface-elevated` | `#181C24` | Dropdown, tooltip, hover state |
| `border` | `#1E2330` | Border card, divider |
| `border-subtle` | `#252B38` | Divider ringan, separator |
| `accent` | `#0ECECE` | CTA button, badge aktif, highlight utama |
| `accent-hover` | `#0AB5B5` | Hover state accent |
| `accent-glow` | `#0ECECE26` | Glow/shadow efek di card hover |
| `profit` | `#0ECECE` | Profit / BUY signal (sama dengan accent) |
| `loss` | `#F75555` | Loss / SELL signal, error, danger |
| `loss-subtle` | `#F7555520` | Background badge loss |
| `warning` | `#F5A623` | Membership expiry, pending, warning |
| `text-primary` | `#F0F2F5` | Teks utama |
| `text-secondary` | `#7A8494` | Label, keterangan, placeholder |
| `text-disabled` | `#3D4452` | Teks nonaktif |

> Teal `#0ECECE` adalah warna brand utama — dipakai untuk aksen, profit, dan elemen interaktif penting.

### 4.2a Tailwind CSS Custom Tokens

```js
// tailwind.config.js
colors: {
  background: '#0A0C10',
  surface: '#111318',
  'surface-elevated': '#181C24',
  border: '#1E2330',
  accent: '#0ECECE',
  'accent-hover': '#0AB5B5',
  profit: '#0ECECE',
  loss: '#F75555',
  warning: '#F5A623',
  'text-primary': '#F0F2F5',
  'text-secondary': '#7A8494',
}
```

### 4.3 Typography

| Peran | Font | Weight | Size |
|-------|------|--------|------|
| Heading H1 | Inter | 700 | 36px / 2.25rem |
| Heading H2 | Inter | 600 | 28px / 1.75rem |
| Heading H3 | Inter | 600 | 22px / 1.375rem |
| Body Default | Inter | 400 | 14px / 0.875rem |
| Body Large | Inter | 400 | 16px / 1rem |
| Label / Caption | Inter | 500 | 12px / 0.75rem |
| Angka / Data | JetBrains Mono | 400–600 | 14–16px |

> Font monospace (JetBrains Mono) digunakan untuk angka trading: harga, lot, P&L, agar mudah dibaca.

### 4.4 Component Style

| Komponen | Style |
|----------|-------|
| **Button Primary** | Background `accent`, text dark, rounded-lg, font-semibold, hover `accent-hover` |
| **Button Secondary** | Transparent + border `border`, text `text-primary`, hover `surface-elevated` |
| **Button Danger** | Background `loss`, text putih, rounded-lg |
| **Card** | Background `surface`, border `border`, rounded-2xl, hover: border-accent subtle |
| **Badge Aktif** | Teal bg `#0ECECE20`, text `accent`, rounded-full |
| **Badge Expired** | `loss-subtle` bg, text `loss`, rounded-full |
| **Badge Pending** | Warning bg dim, text `warning`, rounded-full |
| **Input** | Background `surface`, border `border`, focus ring `accent`, rounded-lg |
| **Table** | Row hover `surface-elevated`, border bawah `border-subtle` |
| **Sidebar** | Background `surface`, lebar 240px, icon + label, active item dengan left-border accent |
| **Navbar** | Background `background/80` + backdrop-blur, border bawah `border`, sticky top |

### 4.5 Sinyal Trading — Visual Convention

| Status | Warna | Style |
|--------|-------|-------|
| BUY / Long | `#0ECECE` (teal) | Background teal dim, panah ↑, font mono |
| SELL / Short | `#F75555` (red) | Background red dim, panah ↓, font mono |
| Open | `#F5A623` (amber) | Dot pulse animation ● |
| Hit TP | `#0ECECE` | Checkmark ✓, badge solid teal |
| Hit SL | `#F75555` | Cross ✗, badge solid red |
| Cancelled | `#3D4452` (gray) | Badge abu-abu, teks coret |

### 4.6 Layout & Spacing
- **Grid:** 12-column, max-width 1280px, padding horizontal 24px
- **Spacing scale:** Berbasis 4px (4, 8, 12, 16, 20, 24, 32, 40, 48, 64)
- **Border radius:** `sm` 6px · `md` 10px · `lg` 14px · `xl` 18px · `2xl` 24px
- **Dashboard layout:** Sidebar kiri fixed (240px) + main content area scrollable

### 4.7 Animasi & Interaktivitas

> Prinsip: **Purposeful, bukan dekoratif.** Animasi hanya untuk memberi feedback dan memperhalus transisi. Tidak ada animasi yang asal gerak-gerak.

| Elemen | Animasi | Detail |
|--------|---------|--------|
| **Button hover** | Scale up ringan + brightness | `scale-[1.02]`, `duration-150` |
| **Card hover** | Border glow teal + lift | `border-accent/30`, `shadow-accent/10`, `duration-200` |
| **Page transition** | Fade in dari bawah | `opacity 0→1` + `translateY 8px→0`, `duration-300` |
| **Sidebar active item** | Slide in background | `duration-150 ease-out` |
| **Sinyal baru masuk** | Pulse ring teal | Ring animation 1x saat pertama muncul |
| **Status dot (Open)** | Ping/pulse loop | `animate-pulse` pada dot sinyal aktif |
| **Loading skeleton** | Shimmer | Wave shimmer dari kiri ke kanan, warna `surface-elevated` |
| **Number counter** | Count up | Angka dashboard (revenue, member) count up saat pertama load |
| **Chart** | Draw on mount | Line chart draw dari kiri ke kanan saat pertama render |
| **Toast/notifikasi** | Slide in dari kanan | `translateX` + fade, auto dismiss 4 detik |
| **Modal/dialog** | Scale + fade | `scale 95→100` + `opacity 0→1`, `duration-200` |
| **Dropdown** | Fade + slide down | `opacity 0→1` + `translateY -4→0`, `duration-150` |

**Library animasi:** Framer Motion untuk transisi kompleks, Tailwind CSS `transition` untuk hover/focus sederhana.

### 4.8 Dark/Light Mode
- **Default:** Dark mode saja (MVP)
- **Support light mode:** Ditunda ke v2

### 4.9 Design Tools
- **Figma:** Design file akan dibuat berdasarkan spec ini (Figma MCP tersedia)
- **shadcn/ui:** Base component library, dikustomisasi ke palette QTrades
- **Framer Motion:** Animasi transisi halaman dan komponen interaktif

---

## 5. Tech Stack

### Frontend
| Komponen | Teknologi |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS + shadcn/ui |
| Animasi | Framer Motion |
| State Management | Zustand / React Query (TanStack Query) |
| Charts | Recharts |
| Trading Chart | TradingView Widget |
| Form | React Hook Form + Zod |

### Backend
| Komponen | Teknologi |
|----------|-----------|
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Storage | Supabase Storage (file/video) |
| Realtime | Supabase Realtime (notifikasi sinyal) |
| API | Next.js API Routes / Supabase Edge Functions |

### Infrastruktur & Layanan
| Komponen | Teknologi |
|----------|-----------|
| Hosting | Vercel (frontend + API) |
| Payment | Midtrans (primary) + opsional Xendit |
| Email | Resend / Nodemailer |
| Media | Cloudinary / Supabase Storage |
| Monitoring | Sentry (error tracking) |

---

## 6. Arsitektur Halaman

```
/ (Landing Page)
/pricing
/about
/blog
/blog/[slug]
/login
/register
/forgot-password
/reset-password

/dashboard                        ← Protected (member)
/dashboard/signals                ← Sinyal Trading
/dashboard/signals/[id]           ← Detail Sinyal
/dashboard/education              ← Materi Edukasi
/dashboard/education/[moduleId]   ← Modul / Video
/dashboard/portfolio              ← Portfolio Tracker
/dashboard/charts                 ← Live Chart
/dashboard/billing                ← Membership & Pembayaran
/dashboard/billing/checkout       ← Pilih Paket & Bayar
/dashboard/referral               ← Kode Referral & Komisi
/dashboard/settings               ← Pengaturan Akun

/admin                            ← Protected (admin)
/admin/dashboard
/admin/members
/admin/members/[id]
/admin/signals
/admin/signals/new
/admin/signals/[id]/edit
/admin/education
/admin/education/[id]/edit
/admin/transactions
/admin/coupons
/admin/packages
/admin/affiliates                 ← Manajemen Referral
/admin/affiliates/[id]            ← Detail Affiliate
/admin/settings
```

---

## 7. Database Schema (Ringkasan)

### Tabel Utama

```sql
-- Auth & User
users              -- profil & info akun (extend dari supabase.auth.users)

-- Membership & Billing
memberships        -- paket aktif per user (plan, started_at, expired_at, status)
plans              -- daftar paket (monthly, yearly, lifetime, dll)
transactions       -- riwayat semua pembayaran
coupons            -- kupon diskon

-- Sinyal Trading
signals            -- sinyal trading (entry, SL, TP1/2/3, kategori, status)
signal_categories  -- kategori aset: forex, komoditas, indices

-- Edukasi
education_modules  -- modul edukasi
education_lessons  -- lesson dalam modul (video, PDF, teks)
user_progress      -- progress belajar per user per lesson

-- Portfolio
portfolio_trades   -- input trade manual oleh member

-- Referral & Affiliate
referral_codes     -- kode unik per user
referrals          -- siapa refer siapa (referrer_id, referee_id, joined_at)
commissions        -- komisi per referral (amount, status: pending/approved/paid)
commission_withdrawals  -- request pencairan komisi

-- Notifikasi
notifications      -- notifikasi in-app
```

---

## 8. Payment Flow

```
Member pilih paket
    ↓
Sistem buat order + redirect ke Midtrans
    ↓
Member bayar (VA / QRIS / e-wallet)
    ↓
Midtrans kirim webhook ke /api/payment/callback
    ↓
Sistem verifikasi signature webhook
    ↓
Update transaksi → PAID
Update membership → ACTIVE (atau perpanjang expired_at)
    ↓
Kirim email invoice + notifikasi in-app
```

---

## 9. Keamanan & Compliance

- HTTPS wajib (enforced di Vercel)
- Row Level Security (RLS) di Supabase untuk semua tabel sensitif
- JWT auth dengan refresh token rotation
- Rate limiting di API routes
- Validasi + sanitasi semua input (Zod)
- Webhook signature verification (Midtrans)
- Password hashing via Supabase Auth (bcrypt)
- Data member tidak boleh diekspos ke client tanpa autentikasi
- Admin routes dilindungi middleware (role check)

---

## 10. Non-Functional Requirements

| Aspek | Target |
|-------|--------|
| Performance | LCP < 2.5s, FCP < 1s (Vercel edge) |
| Availability | 99.9% uptime (Vercel + Supabase SLA) |
| Mobile Responsive | Wajib — mobile-first design |
| SEO | Landing page & blog dioptimasi (Next.js SSG/SSR) |
| Accessibility | WCAG 2.1 AA untuk halaman publik |
| Skalabilitas | Arsitektur siap hingga 10.000 member aktif |

---

## 11. Phases & Prioritas Development

### Phase 1 — Foundation (Minggu 1–3)
- [ ] Setup project Next.js + Supabase + Tailwind + shadcn
- [ ] Konfigurasi design system: color tokens, typography (Inter + JetBrains Mono), dark mode
- [ ] Database schema & RLS setup
- [ ] Auth: register, login, logout, forgot password
- [ ] Landing page & pricing page
- [ ] Halaman dashboard dasar (shell layout + sidebar)

### Phase 2 — Core Member Features (Minggu 4–6)
- [ ] Integrasi Midtrans: checkout, webhook, aktivasi membership
- [ ] Dashboard member: overview, status membership
- [ ] Sinyal trading: feed, detail, filter
- [ ] Notifikasi in-app + email

### Phase 3 — Content, Portfolio & Referral (Minggu 7–9)
- [ ] Materi edukasi: modul, video self-hosted, progress tracking
- [ ] Portfolio tracker: input trade, dashboard performa
- [ ] Live chart: embed TradingView
- [ ] Billing: riwayat transaksi, invoice, perpanjang
- [ ] Referral: kode unik, dashboard komisi member, pencairan

### Phase 4 — Admin Panel (Minggu 10–12)
- [ ] Admin dashboard + statistik
- [ ] Manajemen member
- [ ] Manajemen sinyal (CRUD manual)
- [ ] Manajemen konten & paket
- [ ] Manajemen transaksi + konfirmasi manual
- [ ] Kupon diskon
- [ ] Manajemen referral & affiliate (komisi, pencairan)

### Phase 5 — Polish & Launch (Minggu 13–14)
- [ ] SEO & performance optimization
- [ ] Email templates (invoice, welcome, expiry reminder)
- [ ] Testing & bug fixing
- [ ] Staging deployment & UAT
- [ ] Production launch

---

## 12. Keputusan & Open Questions

### ✅ Sudah Diputuskan
- **Free trial:** Tidak ada. Semua akses hanya untuk member berbayar aktif.
- **Kategori sinyal:** Forex, Komoditas, Indices (US100/Nasdaq, dll). Tidak ada Crypto/Saham.
- **Sinyal:** Manual input oleh admin (fitur otomatis dipertimbangkan di fase berikutnya).
- **Video edukasi:** Embed Vimeo (private/unlisted).
- **Fitur referral:** Ya, dengan komisi yang dapat dikonfigurasi penuh di admin panel.

### ✅ Sudah Diputuskan (Tambahan)
- **Sinyal otomatis:** Tidak untuk sekarang — manual dulu, otomatis dipertimbangkan nanti.
- **Video hosting:** Vimeo (embed private/unlisted).
- **Komisi referral:** Dapat dikonfigurasi di admin panel (% atau flat, per paket, minimum pencairan).

### ❓ Masih Perlu Diklarifikasi
- [ ] **Multi-bahasa:** Perlu support EN selain ID?
- [ ] **Mobile app:** Rencana ke depan untuk React Native / Flutter?
- [ ] **Webinar/live session:** Perlu fitur live atau cukup konten rekaman?

---

*Dokumen ini akan diperbarui seiring perkembangan project.*
