import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './OptIn.css';


const testimonials = [
    {
      id: 'ely',
      name: 'Ely Garcia',
      photo: '/Ely Garcia.jpg',
      testimonial: 'Music Medicine, Therapy using Art and Music, Singer, Songwriter, Music Producer'
    },
    {
      id: 'faryl',
      name: 'Faryl Moore',
      photo: '/Faryl Moore.jpg',
      testimonial: 'Master of Energetic Arts, Pranic Healing and Soul Coach, specializes in removing blocks, traumas, and negative energy and negative thought forms'
    },
    {
      id: 'faye',
      name: 'Faye Lawand',
      photo: '/Faye Lawande.jpg',
      testimonial: 'Internal Conflict Resolution Expert, Trauma-Informed Clinical Hypnotherapist, Stress Response Regulation Expert, and Nervous System Specialist'
    },
    {
      id: 'juli',
      name: 'Juli Romero RN, CCWS, CPC, DTRM',
      photo: '/Julis pic w stars.png',
      testimonial: 'Dolphin Reiki Master Teacher, Certified Holistic Health, Spiritual Wellness Coach'
    },
    {
      id: 'justine',
      name: 'Justine Lette',
      photo: '/Justine Lette.jpg',
      testimonial: 'Internationally recognized Hypnotherapy Trainer, Owner of Hypnosis New Zealand, and Creator of the Golden Thread Trauma Transformation Protocol'
    },
    {
      id: 'karina',
      name: 'Karina Chapman',
      photo: '/Karina Chapman Headshot.jpg',
      testimonial: 'Conscious Connection Expert, Author, and Speaker'
    },
    {
      id: 'markeeta',
      name: 'Markeeta Stokes',
      photo: '/Markeeta-Stokes.jpeg',
      testimonial: 'Author, Personal Development Coach, Owner of day spa, “The Esthetic Suite”'
    },
    {
      id: 'meredith',
      name: 'Meredith Orlowski',
      photo: '/Meredith-Orlowski.jpg',
      testimonial: 'Holistic Health Coach with expertise in functional medicine, nutrition, mindset, meditation, and founder of Root to Leaf Wellness'
    },
    {
      id: 'tania',
      name: 'Tania Davies',
      photo: '/Tania Davis.jpg',
      testimonial: 'The Success Slow Coach™️,CCHt, DHypCoun, MPNLP, MNLPC, MMktg, BMgmt, Director of Mindful Impact™ Wellness Hub, Board Director of Australian Hypnotherapists Association'
    },
    {
      id: 'zoe',
      name: 'Zoe Anna Bell',
      photo: '/Zoe-Anna Bell.jpg',
      testimonial: '6x Selling Author, Breath Coach that leads a Path from Awareness to Embodied Emergence'
    },
    {
        id: 'aishah',
        name: 'Aishah Tatum',
        photo: '/Aishah Tatum.png',
        testimonial: 'Founder of Integrative Wellness Coaching Program, Provides Women with Guidance, Resources and Tools to Detox their Minds, Bodies and Emotions'
    },
    {
        id: 'baylan',
        name: 'Baylan Megino',
        photo: '/Baylan Megino.jpg',
        testimonial: 'Spiritual Mindset and Executive Coach. Founder of Global Dream Makers, Speaker, Podcast and Summit host, and Creator of the Life Framework known as the Dream Maker Matrix™'
    },
    {
        id: 'vicky',
        name: 'Dr. Vicky Coleman',
        photo: '/Dr. Vicky Coleman.jpg',
        testimonial: 'Licensed Clinical Psychotherapist, Anger Management Facilitator, Master Addictions Counselor'
    },
    {
        id: 'karlonty',
        name: 'Karlonty Wallace',
        photo: '/Karlonty.png',
        testimonial: 'CEO and Owner of Pawasative Partnership LLC: Helping Women of Faith heal from trauma using dogs and furbabies as healing tools'
    },
    {
        id: 'maurice',
        name: 'Maurice F Martin',
        photo: '/Maurice f martin.jpg',
        testimonial: 'Spiritual Life Coach, 2x Bestselling Author, Host of Hope Rising podcast, Former co-host of TV show, “Getting the Word Out.”'
    },
    {
        id: 'megan',
        name: 'Megan Callus',
        photo: '/Megan Callus.jpg',
        testimonial: 'Neuroscience-Based Breathwork Expert who is Passionate about sharing the science and Power of breath to help people live productive, joyful, and empowered lives.'
    },
    {
        id: 'monica',
        name: 'Monica Khiatani',
        photo: '/Monica khiatani.jpg',
        testimonial: 'Spiritual Mentor Therapist, Subconscious Mind Trainer, ICF Accredited Life Mindset Coach, Mindfulness Expert, Published Author, Podcast Host'
    },
    {
        id: 'moriah',
        name: 'Moriah Williams',
        photo: '/Moriah Williams.jpg',
        testimonial: 'Holistic Practioner, Writer, and Portal Witch'
    },
    {
        id: 'paula',
        name: 'Paula Kramer',
        photo: '/Paula Kramer Photo.jpg',
        testimonial: 'International Bestselling Author & TV Producer Teaching Soft Skill Power Strategies For Attracting Unimagined Success'
    },
    {
        id: 'sharlene',
        name: 'Sharlene Lynch',
        photo: '/Sharlene.jpg',
        testimonial: 'Speaker | Thought Leaders on MINDSHIFT the future of mindset'
    },
    {
        id: 'terance',
        name: 'Terance Dawkins',
        photo: '/Terrance Dawkins.jpg',
        testimonial: 'LISW-CP, CEO and Owner of Missing Pieces Counseling Services'
    },
    {
      id: 'jeffery',
      name: 'Jeffery Davis',
      photo: '/Jeffrey Davis.jpg',
      testimonial: 'Life Coach dedicated to helping a variety of successful entrepreneurs and professionals tap into their inner power, wisdom, and purpose to improve their professionaland personal relationships'
  },
  ];

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
            <b>We can't wait to have you join us at the Happiness Summit 2023, where you'll discover the keys to lasting happiness and build a vibrant community of support. See you there!</b>
            </p>
        </footer>
        
    );
};

const OptIn = ({ submitted }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const [setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
}, [setWindowWidth]);

const [isMobile, setMobile] = useState(window.innerWidth < 768);

useEffect(() => {
  const handleResize = () => {
    setMobile(window.innerWidth < 768);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


    const styles = {
        carousel: {
          width: '50%',
          margin: '20px 0',
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
        testimonialImage: {
            height: '250px',
            width: 'auto',
        },
        testimonialItem: {
            textAlign: 'center',
        },
        testimonialName: {
            fontWeight: 'bold',
            margin: '10px 0',
        },
        footer: {
          background: '#272122',
          color: '#fff',
          padding: '20px',
          textAlign: 'center',
          marginTop: 'auto',
        }
      };
    
    useEffect(() => {
        localStorage.removeItem('formFilled');
    }, []);

    useEffect(() => {
        if(location.pathname === '/thankyou' && !submitted) {
            navigate('/');
        }
    }, [location, navigate, submitted]);

    const handleSubmit = async (event) => {
      event.preventDefault();
      const searchParams = new URLSearchParams(location.search);
      const ref = searchParams.get('ref');
  
      try {
          const data = { firstName, lastName, email, ref };
          const response = await fetch('https://www.findingjoysummit.net/save-optin-user/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
          });
  
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          } else {
              const result = await response.json();
              console.log(result);
  
              setEmail('');
              setFirstName('');
              setLastName('');
              localStorage.setItem('formFilled', 'true');
          }
  
      } catch (error) {
          console.error('An error occurred:', error);
      } finally {
          navigate('/thankyou');
      }
  };

    
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#b3c5a9', overflowY: 'auto'}}>
        <div style={{width: '100%', overflow: 'hidden'}}>
            <img src="/banner monica.png" alt="Banner" style={{width: '100%', height: 'auto'}}/>
        </div>
        <div style={{width: '100%', padding: '20px', background: 'transparent', textAlign: 'center'}}>
        <div className="decoratedText">
<p style={{color: '#272122', fontFamily: 'Arcadian', fontSize: isMobile ? '15px' : '22px', letterSpacing: '1px', lineHeight: '1.5', paddingLeft: '40px', paddingRight: '40px', paddingTop: '1px'}}>
<b>Your Happiness is right around the corner!!!!!!!!!</b> Get to know an amazing lineup of renowned experts in the fields of Positive Psychology, Mindfulness, Well-Being, and Personal Development as they share with you their wisdom, insights, and practical tips that will give you relief from mental anguish and cultivate a life of bliss!!!! <b>Sign Up below to start a change in your life!!!!</b>
</p>
</div>
</div>

<div style={{width: '100%', padding: '20px', background: 'transparent', textAlign: 'center'}}>
<p style={{color: '#272122', fontWeight: 'bold', fontSize: '26px', fontFamily: 'Arcadian'}}>SUMMIT DATES : AUGUST 21st - 30th</p>
</div>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '20px' }}>
<div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'center', alignItems: 'center', width: '70%', backgroundImage: "url(/form_background.png)", backgroundSize: 'cover', padding: '20px', margin: isMobile ? '0 auto' : '0' }}>
<div style={{ width: isMobile ? '100%' : '35%', marginRight: isMobile ? '0' : '20px' }}>
  <video style={{ width: '100%', height: 'auto', objectFit: 'contain'}} controls>
    <source src="IMG_6071.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
<div style={{ background: 'transparent', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', flexGrow: 1 }}>
<p style={{ color: '#272122', fontFamily: 'Agrandir-Bold', fontWeight: 'bold', fontSize: isMobile ? '15px' : '25px', textAlign: 'center', marginBottom: '20px', letterSpacing: '1px', lineHeight: '1.5', maxWidth: '400px' }}> Get ready to embark on a journey of self-discovery and unlock the secrets to lasting happiness!!!! 
Register now for our FREE exclusive 10-day Virtual Summit. 
Don't forget to share this link with a friend or loved one, and take this journey together!!! </p>
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '400px', width: '100%', padding: '20px 0', marginTop: 'auto' }}>
    <input
      type="text"
      name="firstName"
      value={firstName}
      onChange={e => setFirstName(e.target.value)}
      placeholder="First name"
      required
      style={{ margin: '10px 0', padding: '10px', width: '100%' }}
    />
    <input
      type="text"
      name="lastName"
      value={lastName}
      onChange={e => setLastName(e.target.value)}
      placeholder="Last name"
      required
      style={{ margin: '10px 0', padding: '10px', width: '100%' }}
    />
    <input
      type="email"
      name="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="Email"
      required
      style={{ margin: '10px 0', padding: '10px', width: '100%' }}
    />
    <input
type="submit"
value="CLAIM YOUR SEAT"
style={{
width: '100%',
padding: '10px',
background: 'rgba(197, 225, 184, 0.4)',
fontSize: '20px',
fontWeight: 'bold',
color: '#186417',
cursor: 'pointer',
border: 'none',
}}
/>
  </form>
</div>
</div>
</div>

        <div style={{width: '100%', padding: '20px', background: 'transparent', textAlign: 'center'}}>
<h2 style={{ fontFamily: 'Arcadian-Regular', fontWeight: 'normal' }}>Our Prestigious Speakers</h2>
<Carousel autoPlay showThumbs={false} className="myCarousel">
    {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonialItem" style={styles.testimonialItem}>
            <img src={testimonial.photo} alt="testimonial" style={styles.testimonialImage} />
            <p style={styles.testimonialName}>{testimonial.name}</p>
            <p>{testimonial.testimonial}</p>
        </div>
    ))}
</Carousel>
</div>
<Footer />
    </div>
);
};    

export default OptIn;