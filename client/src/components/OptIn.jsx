import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const OptIn = ({ setSubmitted, submitted }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
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
    
        try {
            const data = { firstName, lastName, email };
    
            const response = await fetch('http://localhost:3000/posts', {
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
                navigate('/thankyou');
            }
    
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };
    

    // Rest of your return statement here...
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, lightpink, white)', height: '100vh', overflowY: 'auto'}}>
            <img src="/BANNER.jpg" alt="Banner" style={{width: '100%', height: '30vh', objectFit: 'cover'}}/>
            <div style={{width: '100%', padding: '20px', background: 'transparent', textAlign: 'center'}}>
                <p style={{color: 'green', fontSize: '16px'}}>Are you ready to embark on a journey of self-discovery and unlock the secrets to lasting happiness? Register now for our FREE exclusive virtual summit and join a community of like-minded individuals hoping to find a fulfilling and joyful life.
                Get to know an amazing lineup of renowned experts in the fields of positive psychology, mindfulness, well-being, and personal development. They will share their wisdom, insights, and practical tips to help you find relief, cultivate happiness and lead a more meaningful life.</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px'}}>
                <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%', background: 'transparent', padding: '20px', height: '50vh'}}>
                    <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        placeholder="First name"
                        required
                        style={{margin: '10px 0', padding: '10px', width: '80%'}}
                    />
                    <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        placeholder="Last name"
                        required
                        style={{margin: '10px 0', padding: '10px', width: '80%'}}
                    />
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                        style={{margin: '10px 0', padding: '10px', width: '80%'}}
                    />
                    <button type="submit" style={{margin: '10px 0', padding: '10px 20px', background: '#D3D3D3', color: 'green', border: '2px solid green', cursor: 'pointer'}}>Claim Your Seat</button>
                </form>
                <div style={{width: '50%', height: '50vh', marginBottom: '20px', background: 'transparent'}}>
                <h3>Don't miss this FREE opportunity to invest in your happiness and well-being. Register now to secure your spot at our free Finding Joy Happiness Summit 2023. Fill out the info below and join us on a path to a happier and more fulfilled life.</h3>
                    {/* <textarea
                        value={text}
                        onChange={e => setText(e.target.value)}
                        style={{width: '100%', height: '20vh', marginBottom: '10px'}}
                        placeholder="Your text here..."
                        
                    /> */}
                    <video style={{width: '100%', height: '30vh', objectFit: 'contain', background: 'transparent'}} controls>
                        <source src="IMG_6071.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default OptIn;