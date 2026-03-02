"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  TrendingUp,
  BookOpen,
  BarChart2,
  LineChart,
  CreditCard,
  Users,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    label: "Sinyal Trading",
    href: "/dashboard/signals",
    icon: TrendingUp,
  },
  {
    label: "Edukasi",
    href: "/dashboard/education",
    icon: BookOpen,
  },
  {
    label: "Portfolio",
    href: "/dashboard/portfolio",
    icon: BarChart2,
  },
  {
    label: "Live Chart",
    href: "/dashboard/charts",
    icon: LineChart,
  },
  {
    label: "Billing",
    href: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    label: "Referral",
    href: "/dashboard/referral",
    icon: Users,
  },
];

const bottomItems = [
  {
    label: "Pengaturan",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={cn(
        "flex h-screen w-[240px] flex-col border-r border-border bg-surface",
        className
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-border px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
          <span className="text-sm font-bold text-primary">Q</span>
        </div>
        <span className="text-lg font-bold tracking-tight text-foreground">
          qtrades
        </span>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
        {navItems.map((item) => {
          const active = isActive(item.href, item.exact);
          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ x: 2 }}
                transition={{ duration: 0.15 }}
                className={cn(
                  "group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                )}
              >
                {/* Active left border indicator */}
                {active && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
                <item.icon
                  size={18}
                  className={cn(
                    "shrink-0 transition-colors",
                    active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
                <span className="flex-1">{item.label}</span>
                {active && (
                  <ChevronRight size={14} className="text-primary/60" />
                )}
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Items */}
      <div className="border-t border-border px-3 py-4">
        {bottomItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                )}
              >
                <item.icon size={18} className="shrink-0" />
                <span>{item.label}</span>
              </div>
            </Link>
          );
        })}

        {/* Logout */}
        <button className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-surface-elevated hover:text-loss">
          <LogOut size={18} className="shrink-0" />
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}
