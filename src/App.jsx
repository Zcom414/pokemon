import { useState } from 'react'
import {Route, Routes, HashRouter} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './componnents/NavBar'
import { Home } from './pages/Home'
import { PokeList } from './pages/PokeList'
import { PokeDetails } from './pages/PokeDetails'
import { Team } from './componnents/Team'


function App() {

  return (
    <HashRouter> {/*BrowseRouter /= w/ github*/}
        <NavBar/>
        <Team/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/pokelist' Component={PokeList}/>
          <Route path='/pokemon/:id' Component={PokeDetails}/>
        </Routes>
    </HashRouter>
  )
}

export default App
