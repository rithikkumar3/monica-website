import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import StripeCheckoutForm from './StripeCheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const ThankYou = () => {
  
  window.scrollTo(0, 0); 

  const Footer = () => {
    return (
        <footer style={{ 
            background: '#c5c2a3', 
            padding: '20px', 
            marginTop: '20px', 
            width: '100%', 
            textAlign: 'center', 
            color: '#272122', 
            fontFamily: 'Arcadian', 
            fontWeight: 'normal'
        }}>
            <p style={{ 
                margin: 0, 
                fontFamily: 'Arcadian', 
                fontWeight: 'normal'
            }}>
            We can't wait to have you join us at the Happiness Summit 2023, where you'll discover the keys to lasting happiness and build a vibrant community of support. See you there!
            </p>
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
      fontSize: window.innerWidth <= 768 ? '1.5rem' : '2.5rem',
      color: '#343a40',
      fontFamily: 'Arcadian, sans-serif',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: window.innerWidth <= 768 ? '1rem' : '1.5rem',
      color: '#6c757d',
      fontFamily: 'Agrandir, Arial, sans-serif',
    },
    contentContainer: contentContainerStyle,
    paymentContainer: paymentContainerStyle,
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.content}>
          <h2 style={styles.title}>Congratulations on your Happiness Package!!!</h2>
          {/* <h2 style={styles.title}>Will I ever be Happy? Finding Joy Amidst Depression and Anxiety</h2> */}
          <p style={styles.subtitle}>We are thrilled to accompany you on this incredible journey of exploring and enhancing joy in your
life!!! We have curated a diverse lineup of world-renowned speakers, experts, and thought leaders who will
share their wisdom and insights on various aspects of happiness, well-being, and personal development
to free your life from depression and anxiety and lift you to a higher ground. This collection of 22 expert
interviews is available to be purchased as a VIP package for only $47!!! This purchase will ALSO provide
you with a free front row ticket to my upcoming 3-week seminar &quot;Grooving Into Happiness&quot; To access this
incredible package, fill out the form below!!!</p>
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
