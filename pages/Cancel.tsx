// src/pages/Cancel.tsx
import React from 'react';

const Cancel = () => {
  return (
    <div>
      <h1>Payment Cancelled</h1>
      <p>Your payment was cancelled. Please try again later.</p>
      {/* Add a link to return to the product page */}
      <a href="/">Return to Product Page</a>
    </div>
  );
};

export default Cancel;