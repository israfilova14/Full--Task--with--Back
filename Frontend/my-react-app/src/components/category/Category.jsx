import React from 'react'
 import "./Category.scss"

const Category = () => {
  return (
    <div>
        <div className='title-box'>
        <h1 className='shop-title'>Shop by Category</h1>
        </div>
        <div className='our-categories'>
           <div className='background-1'>
               <div className='box'>
               <p>Owmen`S</p>
               <div>Best New Deals</div>
               <p>New Collection</p>
               </div>
           </div>
           <div className='background-2'>
                <div className='box'>
                <p>Discount!</p>
                <p>Winter Cloth</p>
                <p>New Collection</p>
                </div>
           </div>
           <div className='background-3'>
                <div className='box'>
                <p>Man`S Cloth</p>
                 <div>Best New Deals</div>
                 <p>New Collection</p>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Category