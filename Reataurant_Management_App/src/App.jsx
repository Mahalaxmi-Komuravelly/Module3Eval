import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import CustomerDashboard from './pages/CustomerDashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/customers/dashboard' element={<CustomerDashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
