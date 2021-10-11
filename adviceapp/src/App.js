import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

  function App() {
  const [ quote, setQuote] = useState(' ');
  
useEffect(()=>{
  fetchQuote();
}, [])

function fetchQuote(){
  axios.get('https://api.adviceslip.com/advice')
  .then((response) => {
    const { advice} = response.data.slip;
    console.log(advice)
    setQuote(advice);
  }).catch((err)=>{
    console.log(err)
  })
}
  return (
    <div className="app">
    <div className="card">
     <h1 className="heading">{quote}</h1>
     <button className='button' onClick={fetchQuote}>
     <span>Give me Advice!</span>
     </button>
    </div>
    </div>
  );
}

export default App;
