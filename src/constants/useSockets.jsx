import React, { useEffect } from 'react'
import socket from './Sockets'

const useSockets = () => {



    useEffect(() => {
        socket.on('connect', () => {
            console.log('Socket connected');
        });

        socket.on('disconnect', () => {
            console.log('Socket disconnected');
        });

    }, []


    )


}

export default useSockets
