import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faWordpress } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(() => { //no return anything except function
        setTimeout(() => { 
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e',]} 
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a very ambitious front-end developer looking for a role in an
                    established IT company with the opportunity to work with the latest
                    technologies on challenging and diverse projects.
                </p>
                <p align="LEFT">
                    I'm quiet self-motivated, determined and perpetually working on
                    honed my problem solving skills at a time.
                </p>
                <p>
                    If I need to define myself in one sentence that would be a team player - 
                    which able to compromise, respect to the other, a constant learner because
                    I like to study new things like new framework and work smart person - I tend
                    to find an easy way out!! 
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#f06529' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd91d' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faAngular} color='#dd0031' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faWordpress} color='#21759b' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#5ed4f4' />
                    </div>
                </div>

            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About;