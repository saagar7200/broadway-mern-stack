
import './global.css'
import Header from './components/header'

import Home from './pages/home/home'
import About from './pages/about'

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Posts from './pages/posts'
import PostDetail from './pages/post-detail'

function App() {
  

  return (
    <>

      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about-us' element={<About/>}/>
          <Route path='/posts' element={<Posts/>}/>
          <Route path='/post/:id' element={<PostDetail/>} />
          <Route path='*' element={<div>404 Page not found</div>}/>

        </Routes>
      </Router>
   

   
    </>
  )
}





export default App
