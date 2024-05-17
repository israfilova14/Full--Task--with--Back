import React from 'react'
import Collection from '../../collection/Collection'
import Category from '../../category/Category'
import Latest from '../latest/Latest'

const Home = () => {
  return (
    <div>
       <Collection></Collection>
       <Category></Category>
       <Latest></Latest>
    </div>
  )
}

export default Home