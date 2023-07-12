import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('formFilled')) {
      navigate('/optin');
    }

    window.scrollTo(0, 0); 
  }, [navigate]);

  const Footer = () => {
    return (
      <footer style={{ background: '#c5c2a3', padding: '20px', marginTop: '20px', width: '100%', textAlign: 'center', color: '#272122' }}>
        <p style={{ margin: 0 }}>We can't wait to have you with us at the Happiness Summit 2023, where you'll discover the keys to lasting happiness and build a vibrant community of support. See you there!</p>
      </footer>
    );
  };

  const contentContainerStyle = {
    backgroundColor: 'rgba(173, 216, 230, 0.3)',
    borderRadius: '5px',
    padding: '20px',
    margin: '20px',
  };

  const paymentContainerStyle = {
    borderRadius: '5px',
    padding: '20px',
    margin: '20px',
    maxWidth: '700px',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      backgroundImage: 'url("/form_background.png")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    content: {
      textAlign: 'center',
      margin: '20px',
    },
    title: {
      fontSize: '2.5rem',
      color: '#343a40',
      fontFamily: 'Arial, sans-serif',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#6c757d',
      fontFamily: 'Arial, sans-serif',
    },
    contentContainer: contentContainerStyle,
    paymentContainer: paymentContainerStyle,
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.content}>
          <h2 style={styles.title}>Thank You!</h2>
          <p style={styles.subtitle}>Your form has been submitted successfully.</p>
        </div>
      </div>
      <div style={styles.paymentContainer}>
        <Elements stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
