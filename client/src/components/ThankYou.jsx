import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SquarePaymentForm from './SquarePaymentForm';

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('formFilled')) {
      navigate('/optin');
    }
  }, [navigate]);

  const contentContainerStyle = {
    backgroundColor: 'rgba(255,255,255,0.8)', // add opacity to make text readable on the background
    borderRadius: '5px',
    padding: '20px',
    margin: '20px',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '50vh',
    overflow: 'auto',
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      overflow: 'auto',
      backgroundImage: 'url("/form_background.png")', // replace this with your image path
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    content: {
      textAlign: 'center',
    },
    title: {
      fontSize: '2.5rem',
      color: '#343a40',
      fontFamily: 'Arial, sans-serif',
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#6c757d',
      fontFamily: 'Arial, sans-serif',
    },
    contentContainer: contentContainerStyle,
    paymentContainer: {
      ...contentContainerStyle,
      borderTop: '1px solid #ddd',
    },
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
        <SquarePaymentForm />
      </div>
    </div>
  );
};

export default ThankYou;
