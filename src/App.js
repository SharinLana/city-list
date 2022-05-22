import './App.css';
import { data } from './data';
import { useState } from 'react';
import leftArrow from './bracket-left.png';
import rightArrow from './bracket-right.png';

function App() {
  const [items, setItems] = useState(data);

  return (
    <div className='App-main-container'>
      <div className='App-header-container'>
        <h1 className='App-header'>{data.length} US Cities to Visit</h1>
      </div>

      <div className='App-cities-container'>
        <div className='App-cities'>
          {items.map((item) => {
            const {id, cityName, info} = item;   
            const {image, imageName, address, description} = info;
              

            return (
              <div key={item.id} className='App-each-city'>
                <p>{cityName}</p> 

                <div className='App-image-container'>
                  <button ><img className='App-arrows' src={leftArrow} alt='left-arrow'/></button>
                  <div>{info[0].image}</div>
                  <button><img className='App-arrows' src={rightArrow} alt='right-arrow'/></button>
                </div>

                <p>{imageName}</p>
                <p className='App-address'>{info[0].address}</p>
                <p className='App-description'>{info[0].description}</p>
                <button className='App-removeEach-btn'>Remove</button>
              </div>
            )
          })}
        </div>

        <button className='App-deleleAll-btn'>Delete All</button>

      </div>
    </div>
  )
}

export default App;