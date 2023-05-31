import { io } from 'socket.io-client';

const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0");
const token = JSON.parse(localStorage.getItem("user-tokens")) || "";


const SERVER_URL = `${localKeyCheck ?
    "https://medxheal.onrender.com/admin"
    :
    "http://localhost:5000/admin"
}`;

const socket = io(SERVER_URL, {
    withCredentials: true,
    extraHeaders: {
        'Custom-Header': `Bearer ${token ? token : ""}`
    }
});


export default socket;
