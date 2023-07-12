import React from 'react';

const PaymentConfirmed = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("/form_background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1>Payment Confirmed!</h1>
      <p>Thank you for your payment. We are excited to have you join us for the Happiness Summit 2023.</p>
    </div>
  );
};

export default PaymentConfirmed;
