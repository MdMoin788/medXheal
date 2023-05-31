import React, { useEffect, useState } from 'react'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Spinner } from 'react-bootstrap'
import { faBell, faComment, faCommentAlt, faEnvelope, faPerson, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Routesfiles } from './_Requests/Routesfiles'
import { postRequest } from './_Requests/Requests'

const NotificationDrawer = ({ isOpen, setIsOpen }) => {
    const [isLoading, setLoading] = useState(false)
    const [notifications, setNotifications] = useState([])

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }




    
 

    return (
        <>
            <Drawer
                lockBackgroundScroll={true}
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                size={500}
                overlayOpacity={0.1}
                style={{ overflow: "scroll" }}
            >
                <div className='p-4'>
                    <h5 className='text-primary'>Notifications<button type="button" className="btn btn-icon pulse">
                        <FontAwesomeIcon icon={faBell} color='#009ef7' size='xl' />
                        <span className="pulse-ring"></span>
                    </button></h5>
                </div>
                <div>
              
                    <div className=''>
                        {/* {
                            !isLoading ?
                                <ul className="list-group list-group-flush">
                                    {
                                        notifications?.map((notification) => {
                                            return <li className={"list-group-item "}>
                                                <div className="d-flex justify-content-start">
                                                    <div className='d-flex align-items-center' style={{ paddingRight: '12px', }}>
                                                        <FontAwesomeIcon icon={faCommentAlt} color='#009ef7' className='notification-mail-icon' />
                                                    </div>
                                                    <div className='pl-6 pr-6 align-self-center' onClick={() => handleNotification(notification?.ticketid, notification?.customerid, notification?.id)} id='kt_drawer_chat2_toggle2'>
                                                        <p style={{ marginBottom: 0 }}>{notification?.title}</p>
                                                        <p style={{ marginBottom: 0 }}>{notification?.body}</p>
                                                    </div>

                                                </div>


                                            </li>

                                        })
                                    }
                                </ul>
                                :
                                <div className='d-flex justify-content-center'>
                                    <Spinner animation={'border'} />
                                </div>
                        } */}
                    </div>

                </div>
            </Drawer>
        </>
    )
}

export default NotificationDrawer