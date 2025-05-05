
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Teampage from './pages/Teampage';
import Homepage from './pages/Homepage';
import {Example} from './pages/Navbar'
import Projects from './pages/Projects';
import Calendar from './pages/Calendar';



function App() {
  
  return (
    <>
    <BrowserRouter>
    <Example/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Teampage' element={<Teampage/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Calendar' element={<Calendar/>}/>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
