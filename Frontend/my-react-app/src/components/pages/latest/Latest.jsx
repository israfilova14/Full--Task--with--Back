import React from 'react'
import "./Latest.scss"
import Products from '../products/Products'

const Latest = () => {
  return (
    <div >
      <div className='latest-box'>
      <h1>Latest Products</h1>
        <div>
        <p>All</p>
        <p>New</p>
        <p>Featured</p>
        <p>Offer</p>
        </div>
      </div>
      <Products></Products>
    </div>
  )
}

export default Latest