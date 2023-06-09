// import React, { useState } from 'react';
// //import axios from 'axios';
// import ThankYou from './ThankYou';

// const OptIn = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [submitted, setSubmitted] = useState(false);

//     // const handleSubmit = async (event) => {
//     //     event.preventDefault();
//     //     try {
//     //         const response = await axios.post('http://localhost:5000/subscribe', { firstName, lastName, email });
//     //         alert(response.data.message);
//     //         setEmail('');
//     //         setFirstName('');
//     //         setLastName('');
//     //         setSubmitted(true);
//     //     } catch (error) {
//     //         console.error('Something went wrong!', error);
//     //     }
//     // };

//     // if(submitted){
//     //     return <ThankYou/>
//     // }
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         console.log({ firstName, lastName, email });
//         setEmail('');
//         setFirstName('');
//         setLastName('');
//         setSubmitted(true);
//     };

//     if(submitted){
//         return <ThankYou/>
//     }

//     return (
//         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, lightpink, white)'}}>
//             <img src="/BANNER.jpg" alt="Banner" style={{width: '100%', height: '30vh', objectFit: 'cover'}}/>
//             <div style={{width: '100%', padding: '20px', background: 'transparent', textAlign: 'center'}}>
//                 {/* Your text goes here */}
//                 <p style={{color: 'green', fontSize: '16px'}}>Are you ready to embark on a journey of self-discovery and unlock the secrets to lasting happiness? Register now for our FREE exclusive virtual summit and join a community of like-minded individuals hoping to find a fulfilling and joyful life.
// Get to know an amazing lineup of renowned experts in the fields of positive psychology, mindfulness, well-being, and personal development. They will share their wisdom, insights, and practical tips to help you find relief, cultivate happiness and lead a more meaningful life.</p>
//             </div>
//             <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px'}}>
//                 <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%', background: 'transparent', padding: '20px', height: '50vh'}}>
//                     <input
//                         type="text"
//                         name="firstName"
//                         value={firstName}
//                         onChange={e => setFirstName(e.target.value)}
//                         placeholder="First name"
//                         required
//                         style={{margin: '10px 0', padding: '10px', width: '80%'}}
//                     />
//                     <input
//                         type="text"
//                         name="lastName"
//                         value={lastName}
//                         onChange={e => setLastName(e.target.value)}
//                         placeholder="Last name"
//                         required
//                         style={{margin: '10px 0', padding: '10px', width: '80%'}}
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                         placeholder="Your email"
//                         required
//                         style={{margin: '10px 0', padding: '10px', width: '80%'}}
//                     />
//                     <button type="submit" style={{margin: '10px 0', padding: '10px 20px', background: '#D3D3D3', color: 'green', border: '2px solid green', cursor: 'pointer'}}>Claim Your Seat</button>
//                 </form>
//                 <video style={{width: '50%', height: '50vh', objectFit: 'contain', marginBottom: '20px', background: 'transparent'}} controls>
//                     <source src="IMG_6071.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </div>
//         </div>
//     );
// };

// export default OptIn;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ThankYou from './ThankYou';

// const OptIn = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [submitted, setSubmitted] = useState(false);
//     const [text, setText] = useState("");

//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         console.log({ firstName, lastName, email });
//         setEmail('');
//         setFirstName('');
//         setLastName('');
//         setSubmitted(true);
//         navigate('/thankyou');
//     };

//     if(submitted){
//         return <ThankYou/>
//     }

//     return (
//         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to bottom right, lightpink, white)', height: '100vh', overflowY: 'auto'}}>
//             <img src="/BANNER.jpg" alt="Banner" style={{width: '100%', height: '30vh', objectFit: 'cover'}}/>
//             <div style={{width: '100%', padding: '20px', background: 'transparent', textAlign: 'center'}}>
//                 <p style={{color: 'green', fontSize: '16px'}}>Are you ready to embark on a journey of self-discovery and unlock the secrets to lasting happiness? Register now for our FREE exclusive virtual summit and join a community of like-minded individuals hoping to find a fulfilling and joyful life.
//                 Get to know an amazing lineup of renowned experts in the fields of positive psychology, mindfulness, well-being, and personal development. They will share their wisdom, insights, and practical tips to help you find relief, cultivate happiness and lead a more meaningful life.</p>
//             </div>
//             <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px'}}>
//                 <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%', background: 'transparent', padding: '20px', height: '50vh'}}>
//                     <input
//                         type="text"
//                         name="firstName"
//                         value={firstName}
//                         onChange={e => setFirstName(e.target.value)}
//                         placeholder="First name"
//                         required
//                         style={{margin: '10px 0', padding: '10px', width: '80%'}}
//                     />
//                     <input
//                         type="text"
//                         name="lastName"
//                         value={lastName}
//                         onChange={e => setLastName(e.target.value)}
//                         placeholder="Last name"
//                         required
//                         style={{margin: '10px 0', padding: '10px', width: '80%'}}
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                         placeholder="Your email"
//                         required
//                         style={{margin: '10px 0', padding: '10px', width: '80%'}}
//                     />
//                     <button type="submit" style={{margin: '10px 0', padding: '10px 20px', background: '#D3D3D3', color: 'green', border: '2px solid green', cursor: 'pointer'}}>Claim Your Seat</button>
//                 </form>
//                 <div style={{width: '50%', height: '50vh', marginBottom: '20px', background: 'transparent'}}>
//                 <h3>Don't miss this FREE opportunity to invest in your happiness and well-being. Register now to secure your spot at our free Finding Joy Happiness Summit 2023. Fill out the info below and join us on a path to a happier and more fulfilled life.</h3>
//                     {/* <textarea
//                         value={text}
//                         onChange={e => setText(e.target.value)}
//                         style={{width: '100%', height: '20vh', marginBottom: '10px'}}
//                         placeholder="Your text here..."
                        
//                     /> */}
//                     <video style={{width: '100%', height: '30vh', objectFit: 'contain', background: 'transparent'}} controls>
//                         <source src="IMG_6071.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OptIn;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OptIn = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({ firstName, lastName, email });
        setEmail('');
        setFirstName('');
        setLastName('');
        navigate('/thankyou');
    };

    // Rest of the code...
    // if(submitted){
    //     return <ThankYou/>
    // }

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
