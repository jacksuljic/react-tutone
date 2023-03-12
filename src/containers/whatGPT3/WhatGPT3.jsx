import React from 'react'
import './whatGPT3.css'
import {Feature} from "../../components";
import { useInView } from 'react-intersection-observer';



const WhatGPT3 = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1
    });
  return (
    <div ref={ref} className='gpt3__whatgpt3 section__margin' id="whatGPT3">
        <div className={'gpt3__whatgpt3-feature '  + ((inView) ? 'visible scale-up-center' : 'hidden')}>
          <Feature inView={inView} title='What is GPT-3'
                   text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
        </div>

        <div className={'gpt3__whatgpt3-heading '  + ((inView) ? 'visible scale-up-center' : 'hidden')}>
            <h1 className='gradient__text'>
                The possibilities are beyond your imagination
            </h1>
            <p>
                Explore the Library
            </p>
        </div>

        <div className='gpt3__whatgpt3-container'>
            <Feature inView={inView}
                     title='Chatbots'
                text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
            />
            <Feature inView={inView}
                     title='Knowledgebase'
                text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
            />
            <Feature inView={inView}
                     title='Education'
                text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
            />
        </div>
    </div>
  )
}

export default WhatGPT3