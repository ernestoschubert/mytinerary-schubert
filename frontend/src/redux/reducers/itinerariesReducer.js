const itinerariesReducer = (state = {itinerary: {}}, action) => {

    if(action.type === "GET_ITINERARY") {
        return {
            ...state,
            itinerary: action.payloud
        }
    }
    else {
        return state;
    }
}

export default itinerariesReducer;
