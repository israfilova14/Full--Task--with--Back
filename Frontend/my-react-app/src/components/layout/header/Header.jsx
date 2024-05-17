import React from 'react'
import { NavLink } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
import "../header/Header.scss"
const Header = () => {
  return (
    <div>
        <header>
             <div className='e-store'>
                <h1>Estore<span>.</span></h1>
             </div>
             <div className='links'>
                <nav>
                    <ul>
                        <li >
                            <NavLink to={'/'} style={{textDecoration: "none", color: "black"}}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/catagori'} style={{textDecoration: "none", color: "black"}}>Categori</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/latest'} style={{textDecoration: "none", color: "black"}}>Latest</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/blog'} style={{textDecoration: "none", color: "black"}}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/pages'} style={{textDecoration: "none", color: "black"}}>Pages</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'} style={{textDecoration: "none", color: "black"}}>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
             </div>
             <div className='header-bottom'>
                <div className='search-box'>
                    <input type="text" placeholder='Search products'/>
                     <SearchIcon></SearchIcon>
                </div>
                <div className='icons-and-button'>
                    <div className='icons-box'>
                         <div className='wish-box'>
                         <FavoriteBorderIcon></FavoriteBorderIcon>
                         </div>
                          <div className='basket-box'>
                          <LocalGroceryStoreIcon></LocalGroceryStoreIcon>
                          </div>
                    </div>
                    <button className='sign-button'>Sign In</button>
                </div>
             </div>

        </header>
    </div>
  )
}

export default Header