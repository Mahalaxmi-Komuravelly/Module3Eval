import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import CustomerDashboard from './pages/CustomerDashboard'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/login"/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/customers/dashboard' element={<CustomerDashboard/>}/>

        {/* <Route path='/admin/dashboard' element={
          <ProtectedRoute>
            <AdminDashboard/>
          </ProtectedRoute>
        }/>
        <Route path='/customers/dashboard' element={
          <ProtectedRoute>
            <CustomerDashboard/>
          </ProtectedRoute>
        }/> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
