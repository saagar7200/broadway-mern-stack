
import './App.css'
import Header from './components/header'

import Home from './pages/home'
import About from './pages/about'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <>

      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about-us' element={<About/>}/>
          <Route path='*' element={<div>404 Page not found</div>}/>

        </Routes>
      </Router>
   

   
    </>
  )
}





export default App
