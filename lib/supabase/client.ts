import { createClient } from '@supabase/supabase-js'
import { Database } from '@/src/types/database.types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY!

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)