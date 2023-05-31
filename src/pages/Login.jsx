
import React from 'react'
import '../styles/login.less'
import LoginDialog from '../components/LoginDialog'
import { UrlSwitcher } from '../constants/_Requests/UrlSwitcher'



export const Login = () => {
  UrlSwitcher()
  return (
    <div className='login'>
      <LoginDialog />
    </div>
  )
}
