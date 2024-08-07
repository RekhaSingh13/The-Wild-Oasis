import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aoebrovitkcmepdczzxc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvZWJyb3ZpdGtjbWVwZGN6enhjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTY0MzMzMiwiZXhwIjoyMDM1MjE5MzMyfQ.LGX37qAXyTYkLthbwYH4KqL_yeAaPOoC06uZ3XMSLqA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
