import React, { useState } from 'react';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '18px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

const StripeCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardNumberElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      axios
        .post('http://localhost:3000/posts/save-thankyou-user', {
          fullName: fullName,
          email: email,
          id: paymentMethod.id,
          amount: 60 // Replace this with the amount to charge
        })
        .then((response) => {
          if (response.data.success) {
            console.log('Successful payment');
            navigate('/payment-confirmed'); // Navigate to the payment confirmation page
          } else {
            console.log('Failed payment');
          }
        })
        .catch((error) => {
          console.log('Error saving to DynamoDB', error);
        });
    }
  };

  const fieldStyle = {
    width: '100%',
    padding: '10px 14px',
    boxSizing: 'border-box',
    border: '1px solid rgba(0,0,0,0.2)',
    borderRadius: '4px',
    backgroundColor: 'transparent', // Add this line
  };

  const paymentBoxStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '700px',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 165, 0, 0.1)',
  };

  return (
    <div style={paymentBoxStyle}>
      <h2>Purchase your VIP Pass!!!</h2>
      <form onSubmit={handleSubmit} style={fieldStyle}>
        <div>
          <label>Full Name</label>
          <div style={fieldStyle}>
            <input type="text" placeholder="Your Name" style={fieldStyle} onChange={e => setFullName(e.target.value)} />
          </div>
        </div>
        <div>
          <label>Email Address</label>
          <div style={fieldStyle}>
            <input type="email" placeholder="Youe Email Address" style={fieldStyle} onChange={e => setEmail(e.target.value)} />
          </div>
        </div>
        <div>
          <label>Card number</label>
          <div style={fieldStyle}>
            <CardNumberElement options={ELEMENT_OPTIONS} />
          </div>
        </div>
        <div>
          <label>Expiration date</label>
          <div style={fieldStyle}>
            <CardExpiryElement options={ELEMENT_OPTIONS} />
          </div>
        </div>
        <div>
          <label>CVC</label>
          <div style={fieldStyle}>
            <CardCvcElement options={ELEMENT_OPTIONS} />
          </div>
        </div>
        <button
          type="submit"
          disabled={!stripe}
          style={{
            marginTop: '1rem',
            fontSize: '1.5rem',
            padding: '10px 20px',
            width: '100%',
            backgroundColor: '#424770',
            color: '#fff',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default StripeCheckoutForm;
