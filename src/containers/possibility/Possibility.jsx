import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'
import { useInView } from 'react-intersection-observer';
const Possibility = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1
    });
  return (
    <div ref={ref}  className='gpt3__possibility section__padding' id='possibility'>
        <div className={'gpt3__possibility-image ' + ((inView) ? 'visible slide-left' : 'hidden' ) }>
            <img src={possibilityImage} alt="possibility" />
        </div>

        <div className={'gpt3__possibility-content '  + ((inView) ? 'visible scale-up-ver-bottom' : 'hidden' ) }>
            <h4>Request Early Access to Get Started</h4>
            <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
            <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <h4>Request Early Access to Get Started</h4>
        </div>
    </div>
  )
}

export default Possibility