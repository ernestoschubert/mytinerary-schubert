import axios from 'axios';

const citiesActions = {
    getCities: () => {
        return async (dispatch, getState) => {
            let res = await axios.get('https://mytinerary-schubert.herokuapp.com/api/cities')
            dispatch({ type: 'GET_CITIES', payload: res.data.response })
        }
    },
    getFiltered: (cities ,e) => {
        return (dispatch, getState) => {
            dispatch({type: 'GET_CITIES_FILTERED', payload:{ cities, e }})
        }
    },
    getCity: (id) => {
        return async(dispatch, getState) => {
            let res = await axios.get('https://mytinerary-schubert.herokuapp.com/api/cities/'+id)
            dispatch({type: 'GET_CITY', payload: res.data.response})
        }
    }
}

export default citiesActions
