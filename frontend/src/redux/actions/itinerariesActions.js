import axios from "axios";

const itinerariesActions = {
    getCityItineraries: (id) => {
        return async(dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/city/${id}`)
            dispatch({type: 'GET_CITY_ITINERARY', payload: res.data.response})
        }
    },
    getItineraryActivities: (id) => {
        return async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/activities/itinerary/${id}`)
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
                    const response = await axios.put(`http://localhost:4000/api/itinerary/like/${id}`, {},{
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
            const response = await axios.post('http://localhost:4000/api/itinerary/comments', commentInfo)
            console.log(response)
            return response
        }
    },
    deleteComment: (IDs)=> {
        return async() => {
            const response = await axios.delete('http://localhost:4000/api/itinerary/comments', {data: IDs}) 
            return response.data.response
        }
    },
    editComment: (itineraryId, commentInfo)=> {
        return async() => {
            const response = await axios.put('http://localhost:4000/api/itinerary/comments/' + itineraryId, commentInfo )
            return response.data.response
        }
    }

}

export default itinerariesActions;