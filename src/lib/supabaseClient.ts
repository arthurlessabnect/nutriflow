import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types/supabase';

// Use the values from the requirements
const supabaseUrl = "https://zholpfbdnolgiokwfwix.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpob2xwZmJkbm9sZ2lva3dmd2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NDYxMTIsImV4cCI6MjA2MTEyMjExMn0.ttg0F-EDaK6FSGA4Y8o0_x3hrmIijtFT15O5HcUwnWA";

// Create client with specific auth configuration
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

// Helper function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseAnonKey;
};
