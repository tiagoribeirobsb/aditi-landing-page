import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// For server-side operations that require elevated permissions
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

export const supabaseAdmin = supabaseServiceKey 
  ? createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null

// Type definitions for the database tables
export type Database = {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone?: string
          company?: string
          message?: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string
          company?: string
          message?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string
          company?: string
          message?: string
        }
      }
      form_events: {
        Row: {
          id: string
          created_at: string
          event_type: string
          form_data?: any
        }
        Insert: {
          id?: string
          created_at?: string
          event_type: string
          form_data?: any
        }
        Update: {
          id?: string
          created_at?: string
          event_type?: string
          form_data?: any
        }
      }
      page_views: {
        Row: {
          id: string
          created_at: string
          page_url: string
          user_agent?: string
          ip_address?: string
        }
        Insert: {
          id?: string
          created_at?: string
          page_url: string
          user_agent?: string
          ip_address?: string
        }
        Update: {
          id?: string
          created_at?: string
          page_url?: string
          user_agent?: string
          ip_address?: string
        }
      }
      sessions: {
        Row: {
          id: string
          created_at: string
          session_id: string
          user_agent?: string
          ip_address?: string
        }
        Insert: {
          id?: string
          created_at?: string
          session_id: string
          user_agent?: string
          ip_address?: string
        }
        Update: {
          id?: string
          created_at?: string
          session_id?: string
          user_agent?: string
          ip_address?: string
        }
      }
      leads_dashboard: {
        Row: {
          id: string
          created_at: string
          total_leads: number
          conversion_rate?: number
          period: string
        }
        Insert: {
          id?: string
          created_at?: string
          total_leads: number
          conversion_rate?: number
          period: string
        }
        Update: {
          id?: string
          created_at?: string
          total_leads?: number
          conversion_rate?: number
          period?: string
        }
      }
    }
  }
}