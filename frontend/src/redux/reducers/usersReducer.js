const usersReducer = (state = {userImg:null, firstName: null, lastName: null}, action) => {

    if(action.type === 'LOG_USER') {
        return {
            ...state,
            userImg : action.payload.userImg,
            firstName : action.payload.firstName,
            lastName : action.payload.lastName
        }
    } else {
        return state
    }
}

export default usersReducer;