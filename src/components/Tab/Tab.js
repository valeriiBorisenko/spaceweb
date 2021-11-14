import './Tab.scss';

function Tab({
  name,
  classLogo,
  isActive
}) {
   
  return (
    <li className={`tab ${isActive? "tab_active": ""}`}>
      <div className={`tab__highlight ${isActive? "tab__highlight_active": ""}`}/>
      <div className="tab__logo">
        <div className={`${classLogo}`}/>
      </div>
      <h3 className="tab__name">{name}</h3>
    </li>
  )
}

export default Tab;