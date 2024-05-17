import React from 'react'
import "../footer/Footer.scss"
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import RecyclingIcon from '@mui/icons-material/Recycling';

const Footer = () => {
  return (
    <div>
        <div className='footer-top'>
            <div className='box-1'>
                <ViewInArIcon></ViewInArIcon>
                <p>Free Shipping Method</p>
                <p className='aorem'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            <div className='box-2'>
                <LockOpenIcon></LockOpenIcon>
                <p>Secure Payment System</p>
                <p className='aorem'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
            <div className='box-3'>
                <RecyclingIcon></RecyclingIcon>
                <p>Secure Payment System</p>
               <p className='aorem'>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
            </div>
        </div>
        <div className='footer-bottom'>
              <div>
                <h2>Estero</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <div>
                <p>Quick Links</p>
                <p>About Offers & Discounts Get Coupon Contact Us</p>
              </div>
              <div>
                <p>New Products</p>
                <p>Woman Cloth Fashion Accessories Man Accessories Rubber made Toys</p>
              </div>
              <div>
                <p>Support</p>
                <p>Frequently Asked Questions Terms & Conditions Privacy Policy Privacy Policy Report a Payment Issue</p>
              </div>
        </div>
    </div>
  )
}

export default Footer