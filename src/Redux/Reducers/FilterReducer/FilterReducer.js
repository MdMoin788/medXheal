import { TIMESLOTS } from './../../ActionTypes/FilterListsActionTypes/FilterListsActionTypes';

const initState = {
    filterLists : {}
}
export const FilterReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case TIMESLOTS:
            return { ...state, filterLists: payload }
      
        default:
            return state
    }
}

// const filterLists = useSelector((states)=>states.FilterReducer.filterLists)