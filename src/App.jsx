import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [city, setCity] = useState();
  const handleCity = (e) => {
    setCity(e.target.value)
    console.log(city)
  }

  return (
    <>
      <div>
        <h1>Open Weather App</h1>
        <h2>Weather in your city</h2>
        <div>
          <input type="text" name="city" placeholder="Enter your city" onChange={handleCity}/>
          <button className="btn">Submit</button>
        </div>

        <div>
          <h3>Weather Details</h3>
          <div className='flex'>
            <h4>FaCity</h4>
            <p>City Name</p>
          </div>

          <div className='flex'>
            <h4>FaTemparatureFull</h4>
            <p>Temparature</p>
          </div>

          <div className='flex'>
            <h4>WiHumidity</h4>
            <p>Humidity</p>
          </div>

          <div className='flex'>
            <h4>GiWhirlwind</h4>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
