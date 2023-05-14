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
    // Start loading 
    setApiData(
      {
        title: "Loading...",
        hdurl: "",
        url:""
      }
    );
    
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => setApiData(data) )
  }

  // Create button component
  const Button = ( props: { title: string } ) => {
    return (
        <button onClick={() => getAPOD()}>{props?.title || "Get item"}</button>
    );
  }


  return (
    <div className="wrapper">
      <h1>{apiData?.title || "Wait"}</h1>
      <div className="action">
        <Button title="Get random Nasa photo"/>
      </div>
      { apiData?.hdurl ? <img src={apiData?.hdurl}/> : "" }
    </div>
  )
}

export default App
