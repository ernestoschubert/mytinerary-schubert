const axios = require('axios');

const usersActions = {

    signUpUser: (newUser) => {
        return async(dispatch, getState) => {
            try {    
                const user = await axios.post('http://localhost:4000/api/auth/signup'+ {newUser})
                dispatch({type:'newuser', payload: {user}})
            }catch(error) {
                console.error(error)
            }
        }
    },



}

export default usersActions