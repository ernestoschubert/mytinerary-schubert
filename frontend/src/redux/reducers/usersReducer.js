const usersReducer = (state = {userImg: null, firstName: null, lastName: null, token: null}, action) => {
    console.log(action)
    if(action.type === 'LOG_USER') {
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('firstName', action.payload.firstName);
        localStorage.setItem('lastName', action.payload.lastName);
        localStorage.setItem('userImg', action.payload.userImg);
        
        return {
            ...state,
            token: action.payload.token,
            userImg : action.payload.userImg,
            firstName : action.payload.firstName,
            lastName : action.payload.lastName
        }
    } else if(action.type === 'LOG_OUT'){
        localStorage.clear()
        return {
            token: null,
            userImg : null,
            firstName : null,
            lastName : null
        }
    } else {
        return state
    }
}


export default usersReducer;
