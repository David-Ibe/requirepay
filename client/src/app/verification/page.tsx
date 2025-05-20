"use client"

export default function VerificationPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Email Verification</h1>
      <div className="text-center">
        <p className="mb-4">
          Please check your email and click the verification link.
        </p>
        <p className="text-sm text-gray-600">
          Once verified, you&apos;ll be able to access your dashboard.
        </p>
      </div>
    </div>
  );
} 