import axios from "axios";

const itinerariesActions = {
    getCityItineraries: (id) => {
        return async(dispatch, getState) => {
            let res = await axios.get(`http://localhost:4000/api/itineraries/city/${id}`)
            console.log(res.data.response)
            dispatch({type: 'GET_CITY_ITINERARY', payload: res.data.response})
        }
    },
    getItineraryActivities: (id) => {
        return async () => {
            try {
                let response = await axios.get(`http://localhost:4000/api/activities/itinerary/${id}`)
                let data = response.data.response
                return data
            } catch (error){
                return {
                    success: false, response: error
                }
            }
        }
    },
    
    likeItinerary: (id, token) =>{
        return async () => {
                try{
                    let response = await axios.put(`http://localhost:4000/api/itinerary/like/${id}`, {},{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                return response
            
                }catch (error){
                    console.log(error)
                }
            
        }
    }
}

export default itinerariesActions;