'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function CancelPage() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to home page after 5 seconds
    const timeout = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-semibold text-red-600">Payment Cancelled</h1>
      <p className="text-gray-600">Your payment was cancelled. You will be redirected to the home page shortly.</p>
    </div>
  );
}