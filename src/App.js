
// Routing concept
import React from 'react'
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import Home from './pages/Home.js'
import Contact from './pages/contact.js'
import Services from './pages/Service.js'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <h1>This is my pages</h1>
      <div className='flex justify-start gap-12 text-center pl-12'>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;
        <Link to="/services">Services</Link>

      </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;




