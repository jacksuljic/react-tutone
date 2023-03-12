import React from 'react'
import './brand.css'

import { google, atlassian, dropbox, shopify, slack } from './imports'

import { useInView } from 'react-intersection-observer';
const Brand = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1
    });
  return (
    <div ref={ref} className={'gpt3__brand section__padding ' + ((inView) ? 'visible scale-up-center' : 'hidden' )}>
        <div>
          <img src={google} alt="google logo"></img>
        </div>
        <div>
          <img src={slack} alt="slack logo"></img>
        </div>
        <div>
          <img src={atlassian} alt="atlassian logo"></img>
        </div>
        <div>
          <img src={dropbox} alt="dropbox logo"></img>
        </div>
        <div>
          <img src={slack} alt="slack logo"></img>
        </div>
    </div>
  )
}

export default Brand