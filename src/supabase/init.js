import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lecruecuevhqihmyrlfm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlY3J1ZWN1ZXZocWlobXlybGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNTk1NDIsImV4cCI6MjAxMzYzNTU0Mn0.ZGk8ZYjqZfnM13yWNRAv35_SRd15a_NY4c5uofxUBuw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
