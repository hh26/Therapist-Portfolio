import { type EmailOtpType } from '@supabase/supabase-js'
import { type NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'

  if (token_hash && type) {
    const supabase = await createClient()

    // Securely exchange the token for a user session cookie
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    })
    
    if (!error) {
      // If successful, redirect them to the password setup page!
      return NextResponse.redirect(new URL(next, request.url))
    }
  }

  // If the link is invalid or expired, send them to login
  return NextResponse.redirect(new URL('/login?error=Invalid_or_expired_link', request.url))
}