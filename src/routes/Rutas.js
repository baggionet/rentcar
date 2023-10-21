import React from 'react'
import { Login } from '../login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Login />}/>
      </Routes>
    </BrowserRouter>
  )
}
