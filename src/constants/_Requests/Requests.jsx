import axios from "axios"
import { UrlSwitcher } from "./UrlSwitcher"
UrlSwitcher()

const token = JSON.parse(localStorage.getItem("user-tokens")) || ""
const localKeyCheck = JSON.parse(localStorage.getItem("API") || "0")
// https://medxheal.netlify.app/auth
// https://medxheal.onrender.com/admin/getAllAppointments

axios.defaults.baseURL = `${localKeyCheck ?
    "https://medxheal.onrender.com/admin"
    :
    "http://localhost:5000/admin"

    }`

    



axios.defaults.withCredentials = true
// axios.defaults.headers.common['userid'] = `${userId}`
axios.defaults.headers.common['authorization'] = `Bearer ${token ? token : ""}`
axios.defaults.headers.common['content-type'] = `application/json`

export async function postRequest(EndPointURL, payloads, setloading) {
    const result = axios.post(`/${EndPointURL}`, payloads && payloads).then((res) => {
        setloading && setloading(false)
        return res
    }).catch((err) => {
        setloading && setloading(false)
        return err
    })
    return result
}


export async function postRequestWithFile(EndPointURL, payloads, setloading) {
    axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    const formData = new FormData();

    Object.keys(payloads).forEach((key) => {
        formData.append(key, payloads[key]);
    });

    const result = axios.post(`/${EndPointURL}`, formData).then((res) => {
        setloading && setloading(false)
        return res
    }).catch((err) => {
        setloading && setloading(false)
        return err
    })
    return result
}

export async function getRequest(EndPointURL, setloading) {
    const result = axios.get(`/${EndPointURL}`).then((res) => {
        setloading && setloading(false)
        return res
    }).catch((err) => {
        setloading && setloading(false)
        return err
    })
    return result
}








