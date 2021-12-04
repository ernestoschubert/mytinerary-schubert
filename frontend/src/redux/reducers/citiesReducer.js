

const citiesReducer = (state = {citiesArray: [], citiesFiltered: [], city: {}}, action) => {
    if(action.type === 'GET_CITIES'){
        return {
            ...state,
            citiesArray: action.payload,
            citiesFiltered: action.payload
        }
    } else if (action.type === 'GET_CITIES_FILTERED'){
        const { cities, e } = action.payload
        const filtered = cities.filter(item => item.city.toLowerCase().trim().startsWith(e.toLowerCase().trim())) 
        return {
            ...state,
            citiesFiltered: filtered
        }
    } else if (action.type === 'GET_CITY'){
        return {
            ...state,
            city: action.payload
        }
    } else {
        return state
    }
}

export default citiesReducer;
