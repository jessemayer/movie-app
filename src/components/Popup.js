import React, { useState } from 'react'
import StarRating from './StarsRating'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import { v4 as uuid } from 'uuid';

function Popup({ selected, closePopup,}) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ review: '', id: uuid()})
  return (
  <section className='popup'>
        <div className='content'>
            <h2>{ selected.Title }<span>({ selected.Year})</span></h2>
                <p className='rating'>Movie Rating: {selected.imdbRating}</p>
                <div className='plot'>
                <img src={selected.Poster} alt=""/>
                <p>{selected.Plot}</p>
            </div>
            <StarRating />
            <button className='close' onClick={closePopup}>Close</button>
            <ReviewForm 
                form ={form}
                reviews = {reviews}
                setForm = {setForm}
                setReviews = {setReviews}
                />
            <ReviewList 
                reviews = {reviews}
                />
    </div>
  </section>
  
  )
}

export default Popup
