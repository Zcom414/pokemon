import { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './componnents/NavBar'
import { Home } from './pages/Home'
import { PokeList } from './pages/PokeList'
import { PokeDetails } from './pages/PokeDetails'
import { Team } from './componnents/Team'


function App() {

  return (
    <BrowserRouter>
        <NavBar/>
        <Team/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/pokelist' Component={PokeList}/>
          <Route path='/pokemon/:id' Component={PokeDetails}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
