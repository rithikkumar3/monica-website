import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // imports the carousel css

// Mock data
const testimonials = [
  {
    name: 'John Doe',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'This is a great site!'
  },
  {
    name: 'Jane Smith',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'I found what I was looking for!'
  },
  {
    name: 'Jane Smith',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'I found what I was looking for!'
  },
  {
    name: 'Jane Smith',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'I found what I was looking for!'
  },
  {
    name: 'Jane Smith',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'I found what I was looking for!'
  },
  {
    name: 'Jane Smith',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'I found what I was looking for!'
  },
  {
    name: 'Jane Smith',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'I found what I was looking for!'
  },
  {
    name: 'Jane Smith',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'I found what I was looking for!'
  },
  {
    name: 'Jane Smith',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'I found what I was looking for!'
  },
  {
    name: 'Jane Smith',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'I found what I was looking for!'
  },
  {
    name: 'Jane Smith',
    photo: '/lady pic.jpeg', // replace with your image link
    testimonial: 'I found what I was looking for!'
  },
  // Add more testimonials as needed
];

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('formFilled')) {
      navigate('/optin');
    }
  }, [navigate]);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      overflow: 'auto', // this will enable scrolling if content height exceeds the viewport height
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
    carousel: {
      width: '50%',
      margin: '100px 0', // increase this to push the Carousel indicators down
    },
    contentContainer: {
      backgroundColor: '#ffffff',
      borderRadius: '5px',
      padding: '20px',
      margin: '20px',
      boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)',
      flex: '1 0 auto', // this will make each container grow to use up space but not shrink, the 'auto' part means it can still be its natural height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      maxHeight: '50vh', // limit the height to 50% of the viewport height
      overflow: 'auto', // enable scrolling within the container if content height exceeds container height
    },
    testimonialImage: {
      maxHeight: '150px', // limit the height of the testimonial images
      width: 'auto', // maintain aspect ratio
    },
    arrow: {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 15px)',
      width: 30,
      height: 30,
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: '#ffffff',
      fontSize: '2rem',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
      <div style={styles.contentContainer}>
      <Carousel
  showArrows={true}
  showThumbs={false}
  showStatus={false}
  showIndicators={false}
  infiniteLoop
  useKeyboardArrows
  autoPlay
  renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button type="button" onClick={onClickHandler} title={label} style={{ ...styles.arrow, left: 15 }}>
        &#10094;
      </button>
    )
  }
  renderArrowNext={(onClickHandler, hasNext, label) =>
    hasNext && (
      <button type="button" onClick={onClickHandler} title={label} style={{ ...styles.arrow, right: 15 }}>
        &#10095;
      </button>
    )
  }
>
  {testimonials.map((testimonial, index) => (
    <div key={index}>
      <img style={styles.testimonialImage} src={testimonial.photo} alt={testimonial.name} />
      <h3>{testimonial.name}</h3>
      <p>{testimonial.testimonial}</p>
    </div>
  ))}
</Carousel>

      </div>
    </div>
  );
};

export default ThankYou;
