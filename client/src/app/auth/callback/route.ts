import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
      const supabase = createRouteHandlerClient({ cookies })
      const { data: { session }, error: sessionError } = await supabase.auth.exchangeCodeForSession(code)
      
      if (sessionError) {
        console.error('Session Error:', sessionError)
        throw sessionError
      }
      
      if (session?.user) {
        // Get stored registration data from cookies
        const cookieStore = await cookies()
        const registrationData = cookieStore.get('pendingRegistration')?.value
        
        if (registrationData) {
          const profileData = JSON.parse(registrationData)
          console.log('Profile Data to Insert:', profileData)
          
          // Create the profile
          const { data: profile, error: profileError } = await supabase
            .from('business_profiles')
            .insert({
              user_id: session.user.id,
              email: session.user.email,
              ...profileData
            })
            .select()
            .single()

          if (profileError) {
            console.error('Profile Creation Error:', profileError)
            throw profileError
          }

          console.log('Profile Created:', profile)
            
          // Clear the cookie
          const cookieStore = await cookies()
          cookieStore.delete('pendingRegistration')
        } else {
          console.log('No registration data found in cookies')
        }
      }
    }

    // Redirect to dashboard after successful verification
    return NextResponse.redirect(new URL('/dashboard', requestUrl.origin))
  } catch (error) {
    console.error('Full Callback Error:', error)
    return NextResponse.redirect(new URL('/error', request.url))
  }
} 