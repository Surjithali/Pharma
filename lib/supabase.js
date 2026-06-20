import { createClient } from '@supabase/supabase-js';

let rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

// 🔥 FORCE CLEANING: Automatically strip out trailing slashes or accidental /rest/v1 paths
if (rawUrl) {
  rawUrl = rawUrl.trim();
  rawUrl = rawUrl.replace(/\/rest\/v1\/?$/, ''); // Removes trailing /rest/v1
  rawUrl = rawUrl.replace(/\/$/, '');            // Removes trailing slash
}

if (!rawUrl || !supabaseKey) {
  throw new Error(
    `🚨 CRITICAL CONFIG ERROR: Supabase keys are unassigned or missing in your environment configuration.`
  );
}

export const supabase = createClient(rawUrl, supabaseKey);