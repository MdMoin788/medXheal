
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import App from '../App'
import { PrivateRoutes } from './PrivateRoutes'
import { AuthPage } from './AuthPage'


export const AppRoutes = () => {

  const token = JSON.parse(localStorage.getItem("user-tokens")) || ""
  // console.log('token', token);

  return (
    <>

      {/* dont add any route here   if you want to add routes then add in PrivateRoutes file  */}

      <Routes>
        <Route element={<App />}>
          {token ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />

            </>
          )}
        </Route>
      </Routes>


    </>
  )
}
