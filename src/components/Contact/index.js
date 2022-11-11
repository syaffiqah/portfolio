import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();
    
    useEffect(() => { //no return anything except function
        setTimeout(() => { 
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_x62wt9w', 
                'template_2307wsk', 
                refForm.current, 
                'Wmlh4Jwq7Q22O58FR'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in any opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}> 
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required />
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Syaffiqqah Jamaluddin,
                <br />
                Selangor, Malaysia<br />
                <span>syaffiqqahjamaluddin@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[3.157803, 101.750963]} zoom={15}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[3.157803, 101.750963]}>
                        <Popup>Let's can meet here for over cup of coffee but I will definitely will order chocolate! :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
    </>
    ) 
}

export default Contact;