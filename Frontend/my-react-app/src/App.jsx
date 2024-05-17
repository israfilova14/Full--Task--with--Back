 
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/layout/header/Header'
import Home from './components/pages/home/Home'
import Catagori from './components/pages/catagori/Catagori'
import Latest from './components/pages/latest/Latest'
import Blog from './components/pages/blog/Blog'
import Pages from './components/pages/page/Pages'
import Contact from './components/pages/contact/Contact'

function App() {
 

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/catagori' element={<Catagori/>}></Route>
      <Route path='/latest' element={<Latest/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/pages' element={<Pages/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </>
  )
}

export default App
