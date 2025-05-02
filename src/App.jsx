import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { FaTemperatureFull } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { GiWhirlwind } from "react-icons/gi";

function App() {
  const [city, setCity] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_URL;

  const url = `${BASE_URL}q=${city}&appid=${API_KEY}`
  console.log(url)

  const handleCity = (e) => {
    setCity(e.target.value)
    console.log(city)
  }

  const fetchData = async () => {
    setIsLoading(true)
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false)
        alert(err.response.data.message)
        console.log("Error: ", err.response.data.message)
    })
  }

  const handleSubmit = (e) => {
    fetchData()
  }

  return (
    <>
      <div>
        <h1>Open Weather App</h1>
        <h2>Weather in your city</h2>
        <div>
          <input type="text" name="city" placeholder="Enter your city" onChange={handleCity}/>
          <button className="btn" onClick={handleSubmit}>{isLoading ? "Loading..." : "submit"}</button>
        </div>

        <div>
          <h3>Weather Details</h3>
          <div className='flex'>
            <h4>FaCity</h4>
            {city ? <p>{city} </p> : <p>City</p>}
          </div>

            {data ? 
            <>
              <div className="flex">
                <h4><FaTemperatureFull /></h4>
                <p>{data && data.main && data.main.temp} &deg;C</p>
              </div>

              <div className="flex">
                <h4><WiHumidity /> </h4>
                <p>{data && data.main && data.main.humidity} g/kg</p>
              </div>

              <div className="flex">
                <h4><GiWhirlwind /> </h4>
                <p>{data && data.wind && data.wind.speed} km/h</p>
              </div>
            </>
           : (
            <p>Weather Details</p>
          )}
        </div>
      </div>

    </>
  )
}

export default App
