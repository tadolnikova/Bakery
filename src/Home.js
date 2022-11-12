import { useState } from 'react';
import FirstPage from './FirstPage';
import {data} from './data';
import './App.css';
import Buttons from './Buttons';
import image20 from './instagram-new.png';


function Home (){
  
    const [bakery, setBakery] = useState(data);
  console.log(bakery);

  const chosenBakery = (searchTerm) =>{
    const newBakery =data.filter (element => element.searchTerm === searchTerm);
      setBakery(newBakery);
  }

  return (<div>
    <div className="cont">
<h2 className='back'>Десерты Анны Томильчик</h2>
    </div>
      <Buttons  filteredBakery={chosenBakery}/>
      <FirstPage itemsForSale={bakery}/>
      <p><img src={image20} width="40px" alt="instagram"/> <a href= "https://annatomilchik.ru/taplink/" target="_blank" rel="noreferrer" >veryirresistible18</a> </p>
         <p>На проект вдохновила кондитерская и сама Анна Томильчик. Все права принадлежат автору странички и сайта оригинала. </p>
        
      
    </div>
      )
}
export default Home;