import axios from "axios";

const itinerariesActions = {
    getCityItineraries: (id) => {
        return async(dispatch, getState) => {
            let res = await axios.get(`http://localhost:4000/api/itineraries/city/${id}`)
            console.log(res.data.response)
            dispatch({type: 'GET_CITY_ITINERARY', payload: res.data.response})
        }
    }
}

export default itinerariesActions;