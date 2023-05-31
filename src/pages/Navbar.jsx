import React from 'react'
import '../styles/navbar.less'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UrlSwitcher } from '../constants/_Requests/UrlSwitcher'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
// import { LineWave } from 'react-loader-spinner'

import NotificationDrawer from './../constants/NotificationDrawer';
import useSockets from '../constants/useSockets'
import socket from '../constants/Sockets'



export const Navbar = () => {
  // useSockets()
  const token = JSON.parse(localStorage.getItem("user-tokens")) || ""
  // ur switcher  

  useSockets()
  React.useEffect(() => {

    const onclickeBaseURLChange = JSON.parse(localStorage.getItem("ischecked") || "0")
    if (!onclickeBaseURLChange) {
      localStorage.setItem("ischecked", JSON.stringify(false))
    }
    UrlSwitcher()

  }, [])

  const onclickeBaseURLChange = JSON.parse(localStorage.getItem("ischecked") || "0") ? JSON.parse(localStorage.getItem("ischecked") || "0") : false
  const [localKey, setlocalKey] = useState(onclickeBaseURLChange || false)

  const changeStatusApi = () => {
    localStorage.setItem("ischecked", JSON.stringify(!localKey))
    const onclickeBaseURLChange = JSON.parse(localStorage.getItem("ischecked") || "0")
    setlocalKey(onclickeBaseURLChange)
  }


  React.useEffect(() => {
    if (localKey) {
      localStorage.setItem("API", JSON.stringify(true))
    } else {
      if (!window.location.origin.includes(".com")) {
        localStorage.setItem("API", JSON.stringify(false))
      }
      else {
        localStorage.setItem("API", JSON.stringify(true))
      }
    }
  }, [localKey])

  // ur switcher  



  const navigate = useNavigate()
  const [showLogoutFrom, setShowLogoutFormPop] = useState(false)
  const [loader, setloader] = useState(false)

  const openLogoutFormPop = () => {
    token && setShowLogoutFormPop(!showLogoutFrom)
    setloader(false)

  }


  const logoutHandler = () => {
    setloader(true)
    localStorage.removeItem('user-tokens');
    setTimeout(() => {
      setloader(false)
      window.location.href = "/"
    }, 3000)
  }

  const redirectTohomeHandler = () => {
    navigate("/dashboard")
  }

  const toolbarButtonMarginClass = 'ms-1 ms-lg-3'

  const [isOpen, setIsOpen] = useState(false)


  return (
    <nav className='navbar'>

      <div className='company-logos' onClick={redirectTohomeHandler}>
        <img className="ms-1 me-3" src="https://cdn-icons-png.flaticon.com/512/187/187879.png" alt="" />
        <span>MedX-Heal</span>
      </div>

      {
        //  token ? 
       <button
          className={` urlSwitcher btn btn-sm btn-flex  btn-${localKey ? "danger" : "dark"} fw-bolder`}
          data-kt-menu-trigger='click'
          data-kt-menu-placement='bottom-end'
          data-kt-menu-flip='top-end'
          onClick={changeStatusApi}
        >
          {/* <i className="bi bi-globe"></i> */}
          {localKey ? "LIVE" : "LOCAL"}
        </button> 
        // window.location.origin.includes(".com") && window.location.host == "medxheal.netlify.app" ? <></> : <a
        //   // href='#'
        //   className={`btn btn-sm btn-flex btn-light btn-${localKey ? "danger" : "primary"} fw-bolder`}
        //   data-kt-menu-trigger='click'
        //   data-kt-menu-placement='bottom-end'
        //   data-kt-menu-flip='top-end'
        //   onClick={changeStatusApi}
        // >
        //   <i className="bi bi-globe"></i>
        //   {localKey ? "ADMIN-API-RUNNING" : "TEST-ADMIN-API-RUNNING"}
        // </a>
      }

      {/* // Notification  */}

      <div onClick={() => setIsOpen(true)} className={clsx('d-flex align-items-center notification', toolbarButtonMarginClass)}>
        <button type="button" className="btn btn-icon pulse">
          <FontAwesomeIcon icon={faBell} color='white' size='xl' />
        </button>
        <span className="pulse-ring"></span>
        <NotificationDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* // Notification */}





      {
        window.location.pathname !== "/login" && <div className='profile-logo'>
          <img onClick={openLogoutFormPop} src="https://avatars.githubusercontent.com/u/90757046?v=4" alt="profile logo" ></img>
          {
            showLogoutFrom ? <div className='logout' onClick={logoutHandler}>
              {
                loader ?
                  <button className="d-flex loaders text-white ms-2" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm mt-1 me-1 text-warning" role="status" aria-hidden="true"></span>
                    Wait...
                  </button>
                  : <>{token ? "Logout" : "Login"}  </>
              }
            </div> : <></>
          }

        </div>
      }


    </nav>
  )
}
