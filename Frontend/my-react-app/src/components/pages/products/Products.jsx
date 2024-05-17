import React ,{useEffect}from 'react'
import "../products/Products.scss"
import {useDispatch, useSelector} from "react-redux"
import { addToBasket, getAllData } from '../../../redux/features/products/productsSlice'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Products = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(store =>store.products) 
    console.log(products);
   
    useEffect(()=>{
      dispatch(getAllData())
    },[])

    const addToCard =(row)=>{
      dispatch(addToBasket(row))
  }

  return (
    <div className='products-box'>
       {
        products && products.map(element =>(
            <div key={element._id} className='product-box'>
               <img src={element.imgSrc} alt="" className='product-image'/>
               <p className='product-title'>{element.title}</p>
               <p className='product-price'>{ "$" + element.price}</p>
               <div className='box-for-icons'>
                <div className='wish-box'>
                    <FavoriteBorderIcon></FavoriteBorderIcon>
                </div>
                <div className='basket-box'>
                    <LocalGroceryStoreIcon onClick={()=>{addToCard(element)}}></LocalGroceryStoreIcon>
                </div>
               </div>
            </div>
        ))
       }
    </div>
  )
}

export default Products