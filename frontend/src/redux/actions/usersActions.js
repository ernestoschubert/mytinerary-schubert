const axios = require('axios')
const usersActions = {

    signUpUser: (username, password) => {
        return async(dispatch, getState) => {
            try {    
                const user = await axios.post('http://localhost:4000/api/auth/signup'+{username,password})
                dispatch({type:'newuser', payload: {user}})
            }catch(error) {

            }
        }
    }

}

export default usersActions