import React, { useState } from 'react';

const SquarePaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardholderName, setCardholderName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you'll want to take the form data and send it to Square's API.
    console.log({
      cardNumber,
      expiryDate,
      cvv,
      cardholderName,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Card Number"
      />
      <input
        type="text"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        placeholder="MM/YY"
      />
      <input
        type="text"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        placeholder="CVV"
      />
      <input
        type="text"
        value={cardholderName}
        onChange={(e) => setCardholderName(e.target.value)}
        placeholder="Cardholder Name"
      />
      <button type="submit">Pay</button>
    </form>
  );
};

export default SquarePaymentForm;
