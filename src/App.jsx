
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/pages/Homepage'
import Sidebar from './components/sidebar/Sidebar'
import FavouritesPage from './components/pages/FavouritesPage'

function App() {
  

  return (
    <div className=' flex'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/favourites' element={<FavouritesPage/>} />
      </Routes>
      
    </div>
  )
}

export default App
