import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import {BASE_URL, API_KEY} from './contant';

function App() {
  const [pOTD, setPOTD] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then((res) => 
        { 
         setPOTD(res.data);
         console.log(res.data)
         console.log(pOTD)
        })
      .catch(err => 
        { 
          console.log(`Encountered Error: ${err}`);
          debugger;
        })
    return () => {
      console.log('Cleaning up');
    }
  }, [])

  return (
    <div className="App">
      <div className="text-container">
        <h1>{pOTD.title}</h1>
        <h4 className="date">{pOTD.date}</h4>
        <p className="description">{pOTD.explanation}</p>
      </div>
      <div className="image-container">
        <img src={pOTD.hdurl} width='65%'/>
      </div>
    </div>
  );
}

export default App;
// export