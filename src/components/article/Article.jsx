import React from 'react'
import './article.css'
import {useInView} from "react-intersection-observer";

const Article = ( {imgUrl, date, title} ) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.1
    });
  return (
    <div className='gpt3__blog-container_article'  ref={ref}>
        <div className='gpt3__blog-container_article-image'>
            <img src={imgUrl} alt='blog' loading={"lazy"}/>
        </div>
        <div className={'gpt3__blog-container_article-content ' + ((inView) ? 'visible scale-up-center' : 'hidden' )} >
            <div>
                <p>{date}</p>
                <h3>{title}</h3>
            </div>
            <p>Read Full Article</p>
        </div>
    </div>
  )
}

export default Article