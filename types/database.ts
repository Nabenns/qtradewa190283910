export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          phone: string | null;
          role: "member" | "admin" | "super_admin";
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["users"]["Row"], "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
      };
      plans: {
        Row: {
          id: string;
          name: string;
          slug: string;
          price: number;
          duration_days: number;
          features: string[];
          is_active: boolean;
          is_popular: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["plans"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["plans"]["Insert"]>;
      };
      memberships: {
        Row: {
          id: string;
          user_id: string;
          plan_id: string;
          status: "active" | "expired" | "cancelled";
          started_at: string;
          expired_at: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["memberships"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["memberships"]["Insert"]>;
      };
      transactions: {
        Row: {
          id: string;
          user_id: string;
          plan_id: string;
          amount: number;
          status: "pending" | "success" | "failed" | "refunded";
          payment_method: string | null;
          payment_channel: string | null;
          midtrans_order_id: string | null;
          midtrans_transaction_id: string | null;
          coupon_id: string | null;
          discount_amount: number;
          created_at: string;
          paid_at: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["transactions"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["transactions"]["Insert"]>;
      };
      coupons: {
        Row: {
          id: string;
          code: string;
          type: "percentage" | "flat";
          value: number;
          max_uses: number | null;
          used_count: number;
          valid_from: string;
          valid_until: string | null;
          is_active: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["coupons"]["Row"], "id" | "used_count" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["coupons"]["Insert"]>;
      };
      signal_categories: {
        Row: {
          id: string;
          name: string;
          slug: "forex" | "commodities" | "indices";
          description: string | null;
          icon: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["signal_categories"]["Row"], "id">;
        Update: Partial<Database["public"]["Tables"]["signal_categories"]["Insert"]>;
      };
      signals: {
        Row: {
          id: string;
          category_id: string;
          pair: string;
          type: "BUY" | "SELL";
          timeframe: string;
          entry: number;
          stop_loss: number;
          take_profit_1: number;
          take_profit_2: number | null;
          take_profit_3: number | null;
          risk_reward: number | null;
          status: "open" | "hit_tp" | "hit_sl" | "cancelled";
          notes: string | null;
          published_at: string;
          closed_at: string | null;
          created_by: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["signals"]["Row"], "id" | "created_at" | "updated_at">;
        Update: Partial<Database["public"]["Tables"]["signals"]["Insert"]>;
      };
      education_modules: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          thumbnail_url: string | null;
          order_index: number;
          is_published: boolean;
          required_plan_ids: string[];
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["education_modules"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["education_modules"]["Insert"]>;
      };
      education_lessons: {
        Row: {
          id: string;
          module_id: string;
          title: string;
          description: string | null;
          type: "video" | "pdf" | "text";
          vimeo_id: string | null;
          file_url: string | null;
          content: string | null;
          duration_minutes: number | null;
          order_index: number;
          is_published: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["education_lessons"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["education_lessons"]["Insert"]>;
      };
      user_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          completed_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["user_progress"]["Row"], "id">;
        Update: Partial<Database["public"]["Tables"]["user_progress"]["Insert"]>;
      };
      portfolio_trades: {
        Row: {
          id: string;
          user_id: string;
          pair: string;
          type: "BUY" | "SELL";
          lot_size: number;
          entry_price: number;
          exit_price: number | null;
          stop_loss: number | null;
          take_profit: number | null;
          profit_loss: number | null;
          status: "open" | "closed";
          opened_at: string;
          closed_at: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["portfolio_trades"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["portfolio_trades"]["Insert"]>;
      };
      referral_codes: {
        Row: {
          id: string;
          user_id: string;
          code: string;
          is_active: boolean;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["referral_codes"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["referral_codes"]["Insert"]>;
      };
      referrals: {
        Row: {
          id: string;
          referrer_id: string;
          referee_id: string;
          referral_code_id: string;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["referrals"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["referrals"]["Insert"]>;
      };
      commissions: {
        Row: {
          id: string;
          referral_id: string;
          transaction_id: string;
          amount: number;
          status: "pending" | "approved" | "paid";
          approved_at: string | null;
          paid_at: string | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["commissions"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["commissions"]["Insert"]>;
      };
      commission_withdrawals: {
        Row: {
          id: string;
          user_id: string;
          amount: number;
          bank_name: string;
          account_number: string;
          account_name: string;
          status: "pending" | "approved" | "rejected" | "paid";
          notes: string | null;
          created_at: string;
          processed_at: string | null;
        };
        Insert: Omit<Database["public"]["Tables"]["commission_withdrawals"]["Row"], "id" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["commission_withdrawals"]["Insert"]>;
      };
      notifications: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          message: string;
          type: "signal" | "membership" | "payment" | "system";
          is_read: boolean;
          data: Json | null;
          created_at: string;
        };
        Insert: Omit<Database["public"]["Tables"]["notifications"]["Row"], "id" | "is_read" | "created_at">;
        Update: Partial<Database["public"]["Tables"]["notifications"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};

// Shorthand types
export type User = Database["public"]["Tables"]["users"]["Row"];
export type Plan = Database["public"]["Tables"]["plans"]["Row"];
export type Membership = Database["public"]["Tables"]["memberships"]["Row"];
export type Transaction = Database["public"]["Tables"]["transactions"]["Row"];
export type Signal = Database["public"]["Tables"]["signals"]["Row"];
export type SignalCategory = Database["public"]["Tables"]["signal_categories"]["Row"];
export type EducationModule = Database["public"]["Tables"]["education_modules"]["Row"];
export type EducationLesson = Database["public"]["Tables"]["education_lessons"]["Row"];
export type PortfolioTrade = Database["public"]["Tables"]["portfolio_trades"]["Row"];
export type Notification = Database["public"]["Tables"]["notifications"]["Row"];
export type Commission = Database["public"]["Tables"]["commissions"]["Row"];
