import React from 'react'
import "../basket/Basket.scss"
import { useSelector } from 'react-redux'
import axios from "axios"

const Basket = () => {
    const basket = useSelector(state => state.products.basket);
    console.log(basket);

        
    const deleteProduct = async(id) =>{
        try{
            await axios.delete(`http://localhost:5000/store/${id}`)
            .then(response => {
             console.log(response);
             if(response.status ===200){
               products.filter(element => element.id !==id )
             }
             dispatch(getAllProducts())
            })

        }catch(error){
            console.log(error);
        }
    }

  return (
    <div >
            {
            basket.map(item=>(
               <div key={item._id} className='basket-box'>
                   <img src={item.imgSrc} alt="" className='basket-image'/>
                    <div className='prices-box'>
                    <p className='basket-title'>{item.title}</p>
                    <p className='basket-price'>{ "$" + item.price}</p>
                    <button className='delete-btn' onClick={()=>{deleteProduct(item._id)}}>Delete</button>
                    </div>
               </div>
            ))
        }
    </div>
  )
}

export default Basket