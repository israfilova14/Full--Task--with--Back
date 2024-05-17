import React from 'react'
import Category from '../../category/Category.jsx'
import Latest from '../../pages/latest/Latest.jsx'
import Collection from '../../collectionpage/Collection.jsx'
import Offer from '../../newoffers/Offer.jsx'
import Footer from '../../../footer/Footer.jsx'

const Home = () => {
  return (
    <div>
     <Collection></Collection>
       <Category></Category>
       <Latest></Latest>
       <Offer></Offer>
       <Footer></Footer>
    </div>
  )
}

export default Home