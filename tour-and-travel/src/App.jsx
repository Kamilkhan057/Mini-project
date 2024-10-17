
import Trips from './commponent/Trips/Trips'
import Memories from './commponent/memories/Memories'
import Header from './commponent/Header/Header'
import Nav from './commponent/Nav/Nav'
import Search from './commponent/searches/search'
import About from './commponent/About/about'
import Testimonial from './commponent/Testimonial/Testimonail'
import Destination from './commponent/Destinations/Destination'
import Footertop from './commponent/Footertop/Footertop'
import Footer from './commponent/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './commponent/pages/Register'
import Login from './commponent/pages/Login'




function App() {
  
  return (
    <>
    
<div className='main'>
  
<Nav/>
<BrowserRouter>

<Routes>
  <Route  path='/' element={<Header/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
</Routes>
</BrowserRouter>

<Memories/>

</div>
<Trips/>
<Search/>
<div className="">
<About/></div>

<Testimonial/>
<Destination/>
<div className="main">
<Footertop/>
</div>
<Footer/>



{/* <Register/> */}

</>
  )
}

export default App
