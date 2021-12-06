import axios from 'axios';

const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            let res = await axios.get('http://localhost:4000/api/cities') 
            console.log(res.data.response)
            dispatch({ type: 'GET_CITIES', payload: res.data.response })
        }
    },
    getFiltered: (cities ,e) => {
        return (dispatch, getState) => {
            dispatch({type: 'GET_CITIES_FILTERED', payload:{ cities, e }})
            console.log(e)
            console.log(cities)
        }
    },
    getCity: (id) => {
        return async(dispatch, getState) => {
            let res = await axios.get('http://localhost:4000/api/cities/'+id)
            console.log(res.data.response)
            dispatch({type: 'GET_CITY', payload: res.data.response})
        }
    }
}

export default citiesActions
