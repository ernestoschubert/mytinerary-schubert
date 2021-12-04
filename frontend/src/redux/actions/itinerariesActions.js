import axios from "axios";

const itinerariesActions = {
    getItinerary: (id) => {
        return async(dispatch, getState) => {
            let res = await axios.get('http://localhost:4000/api/itineraries/'+id)
            console.log(res.data.response)
            dispatch({type: 'GET_ITINERARY', payload: res.data.response})
        }
    }
}

export default itinerariesActions;