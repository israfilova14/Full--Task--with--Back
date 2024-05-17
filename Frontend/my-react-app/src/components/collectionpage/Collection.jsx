import React from 'react'
import winter from "../../assets/images/hero.png"
import '../collectionpage/Collection.scss'

const Collection = () => {
  return (
    <div className='winter-collection'>
        <div className='winter-box'>
            <img src={winter} alt="" />
        </div>
        <div className='about-collection'>
            <p className='discount'>60% Discount</p>
            <h1 className='collection-title'>Winter Collection</h1>
            <p className='collection-text'>Best Cloth Collection By 2020!</p>
            <button className='shop-button'>Shop Now</button>
        </div>
    </div>
  )
}

export default Collection