import React from 'react'
import { v4 as uuid } from 'uuid';

const ReviewForm = ({form, reviews, setForm, setReviews}) => {
    
    

    const handleChange = e => {
        const {name, value } = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = e => {
      e.preventDefault();
      setReviews([...reviews, form]);
      setForm({review: '', id: uuid()})
    }


  return (
    <form className='mb-3 form-floating' onSubmit={handleSubmit}>
        <button type='submit' className='close'>Submit</button>
        <h4>Please leave a review of this movie!</h4>
        <input 
            type='text'
            id='form-input'
            className='form-control'
            autoComplete='off'
            name='review'
            value={form.review}
            onChange={handleChange}
            />
    </form>
  )
}

export default ReviewForm
