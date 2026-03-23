import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AuthLayout from './layouts/AuthLayout'
import AppLayout from './layouts/AppLayout'
import IntroPage from './pages/IntroPage'
import PublicRoute from './routes/PublicRoute'
import ProtectedRoute from './routes/ProtectedRoute'
import Dashboard from './pages/DashboardPage'
import DashboardLayout from './layouts/DashboardLayout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<IntroPage />} />
            </Route>

            <Route element={<AuthLayout />}>
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<AppLayout />}>
              <Route element={<DashboardLayout />}>
                <Route path='/dashboard' element={<Dashboard />} />
              </Route>
            </Route>  
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App