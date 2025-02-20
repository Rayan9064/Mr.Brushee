'use client';
import { useEffect, useState } from 'react';

export default function SuccessPage() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storePaymentData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const sessionId = urlParams.get('session_id');

      if (!sessionId) {
        setMessage('Invalid payment session.');
        return;
      }

      const response = await fetch('/api/payment-success', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      });

      const result = await response.json();
      setMessage(result.message);
      setLoading(false);
    };

    storePaymentData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {loading ? <p>Processing payment...</p> : <p>{message}</p>}
    </div>
  );
}
