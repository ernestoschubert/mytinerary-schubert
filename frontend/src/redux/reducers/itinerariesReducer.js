const itinerariesReducer = (state = {itinerary: []}, action) => {

    if(action.type === "GET_CITY_ITINERARY") {
        return {
            ...state,
            itinerary: action.payload
        }
    }
    else {
        return state;
    }
}

export default itinerariesReducer;
