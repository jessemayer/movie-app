import React from 'react'

function Search ({ handleInput, search }) {
  return (
   
      <section className='searchbox-wrap' >
        <input type='text' 
        placeholder= "Search for a great Movie..." 
        className='searchbox'
        onChange={handleInput}
        onKeyDown={search}
        />
      </section>
    
  )
}

export default Search
