import React from 'react'
import "../newoffers/Offer.scss"

const Offer = () => {
  return (
    <div className='offers-box'>
        <div className='offers-box-left-side'>
            <h1>Get Our latest Offers News</h1>
            <p>Subscribe news latter</p>
        </div>
        <div className='offers-box-right-side'>
            <input type="text" placeholder='Enter your e-mail'/>
            <button>Shop now</button>
        </div>
    </div>
  )
}

export default Offer