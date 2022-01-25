import axios from "axios";

const itinerariesActions = {
    getCityItineraries: (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get(`https://mytinerary-schubert.herokuapp.com/api/itineraries/city/${id}`)
            dispatch({type: 'GET_CITY_ITINERARY', payload: res.data.response})
        }
    },
    getItineraryActivities: (id) => {
        return async () => {
            try {
                const response = await axios.get(`https://mytinerary-schubert.herokuapp.com/api/activities/itinerary/${id}`)
                const data = response.data.response
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
                    const response = await axios.put(`https://mytinerary-schubert.herokuapp.com/api/itinerary/like/${id}`, {},{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                    return response
                } catch(error) {
                    console.error(error)
                }
        }
    },    
    sendComment: (commentInfo)=>{
        return async() => {
            const response = await axios.post('https://mytinerary-schubert.herokuapp.com/api/itinerary/comments', commentInfo)
            return response
        }
    },
    deleteComment: (IDs)=> {
        return async() => {
            const response = await axios.delete('https://mytinerary-schubert.herokuapp.com/api/itinerary/comments', {data: IDs}) 
            return response.data.response
        }
    },
    editComment: (itineraryId, commentInfo)=> {
        return async() => {
            const response = await axios.put('https://mytinerary-schubert.herokuapp.com/api/itinerary/comments/' + itineraryId, commentInfo )
            return response.data.response
        }
    }
}

export default itinerariesActions;