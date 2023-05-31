import { LOGIN } from "../../ActionTypes/LoginTypes/LoginTypes"

const initState = {
    login : {}
}
export const LoginReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return { ...state, login: payload }
      
        default:
            return state
    }
}

// const login = useSelector((states)=>states.LoginReducer.login)