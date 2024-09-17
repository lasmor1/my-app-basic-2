import react from 'react'
import {Link,Route,Routes} from "react-router-dom"
import About from './component/About'
import Home from './component/Home'

// import server from './server/server'
import Vans from './page/Vans'
import VanDetail from './page/VanDetail'


function App() {

  return (
    <><header>
      <Link className='site-logo' to="/">#VANLIFE</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/vans' element={<Vans/>}/>
      <Route path='/vans/:id' element={<VanDetail/>}/>
     </Routes>
    </>
  )
}

export default App
