import { QueryParams } from "../../../constants/_Requests/QueryParams";
import { getRequest } from "../../../constants/_Requests/Requests";
import { Routesfiles } from "../../../constants/_Requests/Routesfiles";
import { TIMESLOTS } from '../../ActionTypes/FilterListsActionTypes/FilterListsActionTypes';

export const filterLists = (user, setLoader) => async (dispatch) => {

    try {
        let newQueryParams = { ...QueryParams("filterList", "?") }
        newQueryParams.setQuery += `category_id=${5}`
    
        const response = await getRequest(Routesfiles(newQueryParams).filterList, setLoader)
        dispatch({ type: TIMESLOTS, payload: response?.data?.filterLists })


       
    } catch (error) {

        toast("Something went wrong")


    }

}