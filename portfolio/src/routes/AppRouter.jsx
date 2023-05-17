import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Intro from '../components/Intro'
import Work from '../components/Work'
import Edu from '../components/Edu'
import Home from '../components/Home'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/intro" element={<Intro />} />
        <Route path="/work" element={<Work />} />
        <Route path="/edu" element={<Edu />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
