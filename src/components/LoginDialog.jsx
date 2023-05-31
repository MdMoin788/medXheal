
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom'
import { initUser } from '../constants/data'
import '../styles/components/login-dialog.less'
import { Button } from './Button'
import { Login } from '../Redux/Actions/LoginActions/LoginActions'
import Iswaiting from './../constants/Iswaiting';
import InputBox from '../constants/InputBox';
import { toast } from 'react-toastify';


const LoginDialog = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState(initUser)
  const [pending, setPending] = useState(false)


  const handleClick = async () => {


    dispatch(Login(user, navigate, toast, setPending))

    setTimeout(() => {
      setPending(false)
    }, 10000)
  }

  return (
    <>


      <div className='login-dialog'>
        <h2>Medical Logo</h2>
        <span>Email :  admin@gmail.com </span>
        <span>Paasword :  admin </span>
        <div className="input-cont">
          <div className="input">
            <p>Email:</p>
            <InputBox name="email" placeholder="Email" type="text" inputsize="col-12" onchangeHandler={setUser} prevdata={user} value={user?.email} />
          </div>
          <div className="input">
            <p>Password:</p>
            <InputBox name="password" placeholder="Password" type="password" inputsize="col-12" onchangeHandler={setUser} prevdata={user} value={user?.password} />
          </div>
        </div>
        <div className="login-forgot">
          {
            pending ? <Iswaiting /> :
              <Button title={'Login'} handleClick={handleClick} />
          }


          <Link to={'/forget-password'}>Forgot Password</Link>
        </div>
      </div>

    </>
  )
}
export default LoginDialog
