import News from '../News/News';
import './Main.scss'

function Main({isNewsData}) {

  return (
    <main className="main">
      <div className="main__container">
        <h3 className="main__subtitle">Бортовой журнал</h3>
        <h1 className="main__title">Бортовой журнал</h1>
        {isNewsData? isNewsData.rss.channel.item.map((item, index) =>
          <News
            key={index} 
            item={item}
          />
        ) : ''}
      </div>
    </main>
  )
}

export default Main;