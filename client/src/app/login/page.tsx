"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // Check if user just registered
    const registered = searchParams.get('registered');
    const email = searchParams.get('email');
    
    if (registered === 'true' && email) {
      setShowConfirmation(true);
      setFormData(prev => ({ ...prev, email: decodeURIComponent(email) }));
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Demo handler: just redirect to dashboard after a short delay
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="bg-white shadow rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-1">Welcome Back</h1>
        <p className="text-gray-600 mb-8">
          Login to your RequirePay account and manage your business effortlessly.
        </p>

        {/* Registration Confirmation Message */}
        {showConfirmation && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Registration Successful!
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>Your account has been created successfully. You can now log in with your credentials.</p>
                </div>
              </div>
              <button
                onClick={() => setShowConfirmation(false)}
                className="ml-auto pl-3"
              >
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              className="w-full"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="w-full"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don&apos;t have an account?
            <Link href="/register" className="text-blue-600 ml-1 hover:text-blue-700">
              Create one here
            </Link>
          </p>

          <p className="text-center text-sm text-gray-600 mt-2">
            <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700">
              Forgot Password?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
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
        </footer>
      </div>

      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
        </div>
      }>
        <LoginForm />
      </Suspense>
    </div>
  );
}