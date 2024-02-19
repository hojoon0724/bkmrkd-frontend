import { Outlet } from 'react-router-dom'
import './App.css'
import Bookmarks from './pages/bookmarks'
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Bookmarks /> */}
      <Outlet />
    </div>
  )
}

export default App
