import { Outlet } from 'react-router-dom'
import './App.css'

// Components
import Navbar from './components/Navbar'

function App() {

  return (
   <div className='App'>
    <Navbar />
    <Outlet />
   </div>
  )
}

export default App
