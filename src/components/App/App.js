import './App.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import Main from '../Main/Main'
import MainBar from '../MainBar/MainBar'
import {sendRequest} from '../../utils/api'
import { useEffect, useState } from 'react';

const parser = require('fast-xml-parser')

function App() {

const baseUrl = "https://sweb.ru/export/turbojournal/"
const [isNewsData, setIsNewsData] = useState("")

useEffect(()=>{
  sendRequest('GET', baseUrl)
    .then((data) => {  
      const news = parser.parse(data)
      setIsNewsData(news)})
    .catch(err => console.log(err))
},[])


  return (
    <div className="app">
      <Header/>
      <MainBar/>
      <Main
        isNewsData={isNewsData}
      />
      <Footer/>
    </div>
  );
}

export default App;
