const usersReducer = (state = {userImg: null, user: null, firstName: null, lastName: null, email: null, token: null, _id: null, allCountries: []}, action) => {
    if(action.type === 'LOG_USER') {
        localStorage.setItem('token', action.payload.token);
        return {
            ...state,
            user: action.payload,
            token: action.payload.token,
            userImg : action.payload.userImg,
            firstName : action.payload.firstName,
            lastName : action.payload.lastName,
            email: action.payload.email,
            _id: action.payload._id
        }
    } else if(action.type === 'LOG_OUT'){
        localStorage.clear()
        return {
            token: null,
            userImg : null,
            firstName : null,
            lastName : null,
            email: null,
            _id: null
        }
    } else if(action.type === 'GET_ALL_COUNTRIES'){
        return {
            allCountries: action.payload,
        }
    } else {
        return state
    }
}


export default usersReducer;
