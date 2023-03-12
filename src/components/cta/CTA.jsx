import React from 'react'
import './cta.css'
import {useInView} from "react-intersection-observer";

const CTA = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1
    });
  return (
    <div className='gpt3__cta section__padding' ref={ref}>
        <div className={'gpt3__cta-content ' + ((inView) ? 'visible scale-up-center' : 'hidden' )}>
            <p>Request Early Access to Get Started</p>
            <h3>Register today & start exploring the endless possiblities.</h3>
        </div>
        <div className='gpt3__cta-btn'>
            <button type='button'>Get Started</button>
        </div>
    </div>
  )
}

export default CTA