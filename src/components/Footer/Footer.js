import './Footer.scss'

function Footer() {
   
  return (
    <footer className="footer">
    <div className="footer__info">
      <p className="footer__text">
        &copy; 2001&ndash; 2018 ООО <a className="footer__link" href="https://sweb.ru/" target="blank">&laquo;СпейсВэб&raquo;</a>
      </p>
      <p className="footer__text">Все права защищены.</p>
      <p className="footer__text">Лицензия <a className="footer__link" href="/#" target="blank">№163230</a></p>
    </div>
    <ul className="footer__numbers">
      <li className="footer__number">
        <a className="footer__link" href="tel:+78123341222">+7 (812) 334-12-22</a><span className="footer__city"> (в Санкт-Петербурге)</span>
      </li>
      <li className="footer__number">
        <a className="footer__link" href="tel:+74956631612">+7 (495) 663-16-12</a><span className="footer__city"> (в Москве)</span>
      </li>
      <li className="footer__number">
        <a className="footer__link" href="tel:8001001615">&nbsp;(800) 100-16-15</a><span className="footer__city"> (бесплатно по России)</span>
      </li>
    </ul>
    </footer>
  )
}

export default Footer;