import { useState } from 'react'
import './App.css'

// NASA
// https://api.nasa.gov/index.html?adobe_mc=MCMID%3D52084379502838795323267412893088462915%7CMCORGID%3DA8833BC75245AF9E0A490D4D%2540AdobeOrg%7CTS%3D1683838327

function App() {
  // States
  const [ apiData, setApiData ] = useState({
    title: "",
    hdurl: "",
    url:""
  });

  // API Key
  const API_KEY = 'mGU118tuVbtFAyEeyfRQ7nsPeyghI2SLVZflPz1h';

  // Get endpoint 
  const ENDPOINT = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  // 
  function getAPOD() {
    console.log("Access endpoint");
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => setApiData(data) )
  }


  return (
    <div className="wrapper">
      <h1>{apiData?.title || "Wait"}</h1>
      <div>{ apiData?.hdurl ? <img src={apiData?.hdurl}/> : "" }</div>
      <div className="action">
        <button onClick={() => getAPOD()}>Get image</button>
      </div>
    </div>
  )
}

export default App
