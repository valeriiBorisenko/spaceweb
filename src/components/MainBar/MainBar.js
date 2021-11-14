import './MainBar.scss';
import Tab from '../Tab/Tab'

function MainBar() {
   
  return (
    <div className="main-bar">
      <div className="main-bar__logo"/>
      <ul className="main-bar__tabs">
        <Tab
          name="аккаунт"
          classLogo="tab__logo_account"
          href="/accoint"
        />
        <Tab
          name="vps"
          classLogo="tab__logo_vps"
          href="/vps"
        />
        <Tab
          name="домены"
          classLogo="tab__logo_domen"
          href="/domen"
        />
        <Tab
          name="бортовой журнал"
          classLogo="tab__logo_help"
          href="/help"
          isActive
        />
      </ul>
    </div>
  )
}

export default MainBar; 