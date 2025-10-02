// src/pages/Success.tsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { Buffer } from 'node:buffer';

const Success = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sessionId = searchParams.get('session_id'); // Get the session ID from the URL

    interface PaymentDetails {
        amount: number;
    }
    
    const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);

    useEffect(() => {
        // Optionally, you can fetch details about the session from Stripe using the session_id
        // This is useful if you want to display more information to the user.
        // You would make a request to your backend to retrieve the session details.

        const fetchPaymentDetails = async () => {
            try {
                const response = await fetch(`http://localhost:4000/api/get-payment-details?session_id=${sessionId}`); // Replace with your backend endpoint

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setPaymentDetails(data);
            } catch (error:any) {
                console.error("Failed to fetch payment details:", error);
            }
        };

        if (sessionId) {
            fetchPaymentDetails();
        }
    }, [sessionId]);

    return (
        <div>
            <h1>Payment Successful!</h1>
            {sessionId && <p>Your session ID is: {sessionId}</p>}
            {paymentDetails ? (
                <>
                    {/* Display payment details from the API response */}
                    <p>Payment Amount: {paymentDetails.amount}</p>
                    {/* Add more details as needed */}
                </>
            ) : (
                <p>Thank you for your purchase!</p>
            )}
        </div>
    );
};

export default Success;