import React, { useState } from 'react'
import Header from './components/header/header'
import { Route, Routes } from 'react-router-dom'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Navbar from './components/navbar/navbar'
import ExploreMenu from './components/exploreFilm/ExploreFilm'
import SubFooter from './components/subFooter/subFooter'
import Footer from './components/Footer/Footer'
import Home from './Pages/Home'
//import { film_list } from './assets/assets'


const App = () => {

  const [showLogin,setshowLogin] = useState(false)

  return (
    <>

    {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
    <div className='app'>
      
      <Navbar setshowLogin={setshowLogin} />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
         </Routes> 
      <ExploreMenu />

      <SubFooter />
      <Footer />
    </div>
    </>
  )
}

export default App