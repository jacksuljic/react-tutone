import React from 'react'
import './header.css'
import { useInView } from 'react-intersection-observer';

import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.1
  });
  return (
    <div ref={ref} className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className={'gradient__text ' + ((inView) ? 'visible scale-up-center' : 'hidden' )}>
            Let’s Build Something amazing with GPT-3 OpenAI
          </h1>

          <p>
            Yet bed any for travelling assistance indulgence unpleasing.
            Not thoughts all exercise blessing. 
            Indulgence way everything joy alteration boisterous the attachment. 
            Party we years to order allow asked of.
          </p>

          <div className={'gpt3__header-content__input ' + ((inView) ? 'visible scale-up-center' : 'hidden' )}>
            <input type='email' placeholder='Your E-mail Address' />
            <button type='button'> Get Started</button>
          </div>

          <div className='gpt3__header-content__people'>
            <img src={people} alt='small round icons of people' title='small round icons of people'/>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>

        <div className='gpt3__header-image'>
            <img src={ai} alt='a logo of a robot head' title='a logo of a robot head representing AI' />
          </div>
    </div>
  )
}

export default Header