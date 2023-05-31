import { postRequest } from "../../../constants/_Requests/Requests";
import { Routesfiles } from "../../../constants/_Requests/Routesfiles";
import { LOGIN } from "../../ActionTypes/LoginTypes/LoginTypes"

export const Login = (user, navigate, toast, setPending) => async (dispatch) => {

    try {
        setPending(true)
        const response = await postRequest(Routesfiles()?.loginUserProfile, user, setPending)

        if (response?.data?.success) {
            toast(response?.data?.message)
            localStorage.setItem("user-tokens", JSON.stringify(response?.data?.token))
            localStorage.setItem("user", JSON.stringify(response?.data?.user))
            dispatch({ type: LOGIN, payload: response?.data?.user })
            window.location.href = "/dashboard"


        }
        else {
            toast(response?.response?.data?.message, {position:"top-center"})
        }
    } catch (error) {

        toast("Something went wrong")

        setPending(false)

    }

}