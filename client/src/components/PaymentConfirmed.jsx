import React from 'react';

const styles = {
  paymentConfirmedText: {
    fontFamily: 'Arcadian, Arial, sans-serif',
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  additionalText: {
    fontFamily: 'Agrandir, Arial, sans-serif',
    fontSize: '1rem',
  },
};

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
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(173, 216, 230, 0.2)', // light blue color
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // a slight shadow effect
          maxWidth: '800px', // make the box more vertical by limiting its maximum width
        }}
      >
        <h1 style={styles.paymentConfirmedText}>Payment Confirmed!</h1>
        <p style={styles.additionalText}>Thank you for purchasing the Finding Joy V.I.P. package!!! I&#39;m tickled pink that you have made a decision
    towards transformation!!! You have secured an exclusive seat to an amazing lineup! You will be
    receiving a link to this spectacular collection of expert speakers on August 21st. This link will
    contain the entire Summit and will never expire.
    In addition, you will be receiving a link for my upcoming 3-week seminar: "Grooving Into Happiness" that is set to launch in
    October as part of the VIP package!!!
    I'm so happy you have decided to take this journey with us!!!!</p>
      </div>
    </div>
  );
};

export default PaymentConfirmed;
