import './index.scss';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['y','a','f','f','i','q','q','a','h']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    useEffect(() => { //no return anything except function
        setTimeout(() => { 
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _12`}>I</span>
                    <span className={`${letterClass} _12`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>Frontend Developer / JavaScript Developer / Wordpress Developer</h2>
                <Link to="/contact" className='flat-button'>
                    CONTACT ME
                </Link>
                <Logo />
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Home;