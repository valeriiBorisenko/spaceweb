import { useState } from 'react';
import './News.scss'

function News({item}) {

  const [isClick, setIsClick] = useState(false);

  function clickNews() {
    if(!isClick){
      setIsClick(true)
    } else {
      setIsClick(false)}
  }

  function createNews() {
    return {__html: `${item["turbo:content"]}`}
  }

  function createTitle() {
    return {__html: `${item["turbo:topic"]}`}
  }

  return (
    <li className="news" onClick={clickNews}>
      <div className={`news__container ${isClick? "news__container_click": ""}`}>
        <div className="news__title" dangerouslySetInnerHTML={createTitle()}/>
        <div className={`news__arrow ${isClick? "news__arrow_click": ""}`}/>
      </div>
      <div className={`news__description ${isClick? '' : "news__description_hide"}`}>
        <div className={`news__content`} dangerouslySetInnerHTML={createNews()}/>
      </div>
    </li>

  )
}

export default News;