import { createClient } from '@supabase/supabase-js'

// Direct assignment of values
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY  // Your actual anon key goes here

// Verify values before creating client
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key must be defined')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
