import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import Watchhistory from './Pages/Watchhistory'

function App() {

  return (
    <>
      <Header />
      {/* path for components */}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Watchhistory' element={<Watchhistory />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
