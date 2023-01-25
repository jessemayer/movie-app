import React, { useState } from 'react';
import axios from 'axios';

import './App.css';
import StarRating from './components/StarsRating'; 
import Search from './components/Search';
import Results from './components/Result';


function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  })
    const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=4b53b505";

    const search = (e) => { 
      console.log( e );
      if (e.key === "Enter") {
        axios(apiurl + "&s=" + state.s).then(({ data }) => {
         let results = data.Search;

         setState(prevState => {
          return {...prevState, results: results}
         })
        });
      }
    }

  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return {...prevState, s: s}
    });

    
  }

  return (
   <div className='App'>
    <header>
      <h1>Movie Assignment</h1>
    </header>
    <main>
      <Search handleInput={handleInput} search={search} />
      <Results results={state.results} />
    </main>
    <StarRating />
   </div>
  );
}

export default App;
