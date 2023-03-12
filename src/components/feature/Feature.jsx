import React from 'react'
import './feature.css'

const Feature = ( { title, text, inView}) => {
  return (
    <div className={ ((inView) ? 'scale-up-center visible' : 'hidden') +  ' gpt3__features-container__feature'}>
        <div className={'gpt3__features-container__feature-title'}>
            <div />
            <h1>{title}</h1>
        </div>
        <div className='gpt3__features-container__feature-text'>
            <p>
                {text}
            </p>
        </div>
    </div>
  )
}

export default Feature