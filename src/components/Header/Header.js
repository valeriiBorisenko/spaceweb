import './Header.scss'

function Header() {
   
  return (
    <header className="header">
      <li className="header__text header_list">100.00 &#8381;</li>
      <li className="header__user header_list">
        <div className="header__user_logo">
          <p className="header__user_amount">1</p>
        </div>
        <p className="header__text">vikavishny</p>
      </li>
      <li className="header__text header_list">Выйти</li>
    </header>
  )
}

export default Header;