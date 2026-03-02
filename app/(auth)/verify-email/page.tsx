"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { toast } from "sonner";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";
  const [isResending, setIsResending] = useState(false);

  async function handleResend() {
    if (!email) return;
    setIsResending(true);
    const supabase = createClient();
    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });
    setIsResending(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Email verifikasi sudah dikirim ulang");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-md"
    >
      <div className="bg-surface rounded-2xl border border-border p-8 space-y-6 text-center">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
            <Mail className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground">
            Cek email kamu
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Kami sudah mengirim link verifikasi ke{" "}
            {email ? (
              <span className="font-medium text-foreground">{email}</span>
            ) : (
              "email kamu"
            )}
            . Klik link tersebut untuk mengaktifkan akun QTrades kamu.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="secondary"
              className="w-full"
            >
              Buka Gmail
            </Button>
          </a>

          <button
            type="button"
            onClick={handleResend}
            disabled={isResending || !email}
            className="w-full text-sm text-muted-foreground hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed py-2"
          >
            {isResending ? "Mengirim..." : "Kirim ulang email"}
          </button>
        </div>

        <div className="pt-2 border-t border-border">
          <Link
            href="/login"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Kembali ke Login
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={null}>
      <VerifyEmailContent />
    </Suspense>
  );
}
