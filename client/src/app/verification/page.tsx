"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import supabase from '@/lib/supabase';
import toast from 'react-hot-toast';

export default function VerificationPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleVerification = async () => {
      try {
        // Check auth status
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) throw sessionError;

        if (session?.user) {
          console.log('User authenticated:', session.user);

          // Get stored registration data
          const pendingRegistrationStr = localStorage.getItem('pendingRegistration');
          if (!pendingRegistrationStr) {
            console.log('No pending registration found');
            router.push('/dashboard');
            return;
          }

          const pendingRegistration = JSON.parse(pendingRegistrationStr);

          // Check if profile already exists
          const { data: existingProfile, error: profileCheckError } = await supabase
            .from('business_profiles')
            .select('*')
            .eq('user_id', session.user.id)
            .single();

          if (profileCheckError && profileCheckError.code !== 'PGRST116') {
            throw profileCheckError;
          }

          if (existingProfile) {
            console.log('Profile already exists:', existingProfile);
            localStorage.removeItem('pendingRegistration');
            router.push('/dashboard');
            return;
          }

          console.log('Creating new profile for user:', session.user.id);

          // Create new profile
          const { error: createError } = await supabase
            .from('business_profiles')
            .insert({
              user_id: session.user.id,
              email: pendingRegistration.email,
              first_name: pendingRegistration.firstName,
              last_name: pendingRegistration.lastName,
              business_name: pendingRegistration.businessName,
              business_website: pendingRegistration.businessWebsite,
              phone_number: pendingRegistration.phoneNumber,
              country_code: pendingRegistration.countryCode
            });

          if (createError) {
            console.error('Profile creation error:', createError);
            throw createError;
          }

          console.log('Profile created successfully');
          localStorage.removeItem('pendingRegistration');
          toast.success('Registration completed successfully!');
          router.push('/dashboard');
        } else {
          console.log('No active session found');
        }
      } catch (error) {
        console.error('Verification error:', error);
        toast.error('Failed to complete registration. Please try again or contact support.');
      } finally {
        setIsLoading(false);
      }
    };

    // Check immediately
    handleVerification();

    // Also set up an interval to check periodically
    const interval = setInterval(handleVerification, 3000);

    return () => clearInterval(interval);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
      {isLoading ? (
        <div className="text-center">
          <p className="mb-4">Verifying your email...</p>
          <p className="text-sm text-gray-600">
            Please wait while we complete your registration.
          </p>
        </div>
      ) : (
        <div className="text-center">
          <p className="mb-4">
            Please check your email and click the verification link.
          </p>
          <p className="text-sm text-gray-600">
            Once verified, you&apos;ll be automatically redirected.
          </p>
        </div>
      )}
    </div>
  );
} 