"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { countryCodes } from "@/lib/country-codes";
import supabase from "@/lib/supabase";
import toast from 'react-hot-toast';

// Add this type for form data
interface FormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  businessName: string;
  businessWebsite?: string;
  phoneNumber?: string;
  countryCode: string;
}

export default function RegisterPage() {
  const router = useRouter();

  // Initialize form data
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    businessName: '',
    businessWebsite: '',
    phoneNumber: '',
    countryCode: ''
  });

  const [countryCode, setCountryCode] = useState(countryCodes[0].dial_code);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [showPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countryCodes.find((c) => c.dial_code === e.target.value);
    if (country) {
      setSelectedCountry(country);
      setCountryCode(country.dial_code);
    }
  };

  const handleBusinessWebsiteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value && !value.match(/^https?:\/\//)) {
      value = `https://${value}`;
    }
    setFormData((prev) => ({ ...prev, businessWebsite: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      setError("Please agree to the terms and conditions.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // Prepare profile data
      const profileData = {
        email: formData.email.toLowerCase().trim(),
        first_name: formData.firstName,
        last_name: formData.lastName,
        business_name: formData.businessName,
        business_website: formData.businessWebsite || null,
        phone_number: formData.phoneNumber ? `${countryCode}${formData.phoneNumber}` : null,
        country_code: selectedCountry.code
      };

      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email.toLowerCase().trim(),
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
          },
        },
      });

      console.log('Auth Response:', { authData, authError }); // Debug log

      if (authError) throw new Error(authError.message || "Failed to create account.");
      if (!authData.user?.id) throw new Error("User registration incomplete.");

      // Create business profile immediately
      const { data: profile, error: profileError } = await supabase
        .from('business_profiles')
        .insert({
          user_id: authData.user.id,
          ...profileData
        })
        .select()
        .single();

      if (profileError) {
        console.error('Profile Creation Error:', profileError);
        throw new Error('Failed to create business profile');
      }

      console.log('Profile Created:', profile);

      toast.success('Registration successful! Please check your email to verify your account.', {
        duration: 5000,
      });
      
      router.push('/verification?email=' + encodeURIComponent(formData.email));

    } catch (err) {
      console.error("Full Registration Error:", err);
      const errorMessage = err instanceof Error 
        ? err.message 
        : "Registration failed. Please try again.";
      
      setError(errorMessage);
      toast.error(errorMessage, {
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="hidden lg:flex flex-1 flex-col justify-between p-12 bg-black text-white relative">
        <Link href="/">
          <Image src="/logo.svg" alt="RequirePay Logo" width={120} height={40} />
        </Link>
        <p className="mt-8 text-lg max-w-md">
          Seamless access to corporate cards, multi-currency accounts, and global payouts, all in one account.
        </p>
        <footer className="text-sm text-gray-400">
          <span>RequirePay 2024</span>
          <Link href="/platform-agreement" className="ml-4 hover:text-white">
            Platform Agreement
          </Link>
          <Link href="/privacy-policy" className="ml-4 hover:text-white">
            Privacy Policy
          </Link>
        </footer>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white shadow rounded-2xl p-8 w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-1">Create your RequirePay account</h1>
          <p className="text-gray-600 mb-8">Set up your account in no time!</p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input
                id="firstName"
                aria-label="First Name"
                placeholder="Enter first name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <Input
                id="lastName"
                aria-label="Last Name"
                placeholder="Enter last name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <Input
              id="businessName"
              aria-label="Business Name"
              placeholder="Enter business name"
              value={formData.businessName}
              onChange={handleInputChange}
              required
            />

            <Input
              id="businessWebsite"
              aria-label="Business Website" 
              placeholder="www.example.com"
              value={formData.businessWebsite}
              onChange={handleBusinessWebsiteChange}
            />

            <Input
              id="email"
              aria-label="Email"
              placeholder="Enter your work email" 
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex">
                <select
                  value={selectedCountry.dial_code}
                  onChange={handleCountrySelect}
                  className="rounded-l-md border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-black"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.dial_code}>
                      {country.flag} {country.dial_code}
                    </option>
                  ))}
                </select>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone number"
                  className="rounded-r-md"
                  required
                />
              </div>
            </div>

            <Input
              id="password"
              aria-label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={agreedToTerms}
                onCheckedChange={(checked) => setAgreedToTerms(!!checked)}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to RequirePay&apos;s
                <Link href="/terms" className="text-blue-600 ml-1 hover:text-blue-700">
                  Terms of Use
                </Link>
                and
                <Link href="/privacy" className="text-blue-600 ml-1 hover:text-blue-700">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white"
              disabled={loading || !agreedToTerms}
            >
              {loading ? "Creating account..." : "Create my account"}
            </Button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?
              <Link href="/login" className="text-blue-600 ml-1 hover:text-blue-700">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
