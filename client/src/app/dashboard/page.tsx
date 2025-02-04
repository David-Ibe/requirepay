"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import supabase from "@/lib/supabase";
import { toast } from "react-hot-toast";
import ProfileEditor from "@/components/ProfileEditor";

interface UserProfile {
  user_id: string;
  email: string;
  first_name: string;
  last_name: string;
  business_name: string;
  business_website: string | null;
  phone_number: string | null;
  country_code: string | null;
}

export default function DashboardPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  const checkAuth = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/login');
        return;
      }

      const { data: existingProfile, error: profileError } = await supabase
        .from('business_profiles')
        .select('*')
        .eq('user_id', session.user.id)
        .single();

      if (profileError) {
        throw profileError;
      }

      setProfile(existingProfile);
      setUserName(existingProfile.first_name);

    } catch (error) {
      console.error('Dashboard error:', error);
      toast.error('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [router]);

  // Handle welcome message dismissal
  const handleDismissWelcome = () => {
    localStorage.setItem('requirepay_welcomed', 'true');
    setShowWelcome(false);
  };

  const handleProfileUpdate = () => {
    checkAuth();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="RequirePay Logo" width={120} height={40} />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {userName}</span>
              <button
                onClick={() => supabase.auth.signOut().then(() => router.push('/login'))}
                className="text-gray-600 hover:text-gray-900"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Welcome Message for New Users */}
      {showWelcome && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 relative">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Welcome to RequirePay, {userName}!
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Your account has been successfully created. Let&apos;s get started!</p>
                </div>
              </div>
            </div>
            {/* Dismiss button */}
            <button
              onClick={handleDismissWelcome}
              className="absolute top-4 right-4 text-green-700 hover:text-green-900"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {/* Overview Section */}
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Business Overview</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Business Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{profile?.business_name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Website</dt>
                <dd className="mt-1 text-sm text-gray-900">{profile?.business_website || 'Not provided'}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Contact Number</dt>
                <dd className="mt-1 text-sm text-gray-900">{profile?.phone_number || 'Not provided'}</dd>
              </div>
            </dl>
          </div>

          {/* Quick Actions */}
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <h3 className="text-sm font-medium text-gray-900">Create Virtual Card</h3>
                <p className="mt-1 text-sm text-gray-500">Issue a new virtual card for online payments</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <h3 className="text-sm font-medium text-gray-900">Add Funds</h3>
                <p className="mt-1 text-sm text-gray-500">Top up your account balance</p>
              </button>
              <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <h3 className="text-sm font-medium text-gray-900">Send Payment</h3>
                <p className="mt-1 text-sm text-gray-500">Transfer funds to another account</p>
              </button>
            </div>
          </div>
        </div>

        {profile && (
          <ProfileEditor 
            profile={{
              user_id: profile.user_id,
              email: profile.email,
              first_name: profile.first_name,
              last_name: profile.last_name,
              business_name: profile.business_name,
              business_website: profile.business_website,
              phone_number: profile.phone_number,
              country_code: profile.country_code
            }}
            onUpdate={handleProfileUpdate} 
          />
        )}
      </main>
    </div>
  );
} 