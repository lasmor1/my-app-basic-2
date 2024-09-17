import react from 'react'
import {Link,Route,Routes} from "react-router-dom"
import About from './component/About'
import Home from './component/Home'


function App() {

  return (
    <><header>
      <Link className='site-logo' to="/">#VANLIFE</Link>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </header>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </>
  )
}

export default App
