const axios = require('axios');

const usersActions = {

    signUpUser: (newUser) => {
        return async(dispatch, getState) => {
            try {    
                const response = await axios.post('http://localhost:4000/api/users/signup', {...newUser})
                if(response.data.success) {
                    console.log(response)
                    console.log(response.data)
                   dispatch({type:'LOG_USER', payload: response.data.response})
            }
            } catch(error) {
                console.error(error)
            }
        }
    },

    signInUser: (signUser) => {
        return async(dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/users/signin', {...signUser})
                if(response.data.success){
                    dispatch({type: 'LOG_USER', payload: response.data.response})
                }
                return response
            } catch(error) {
                console.log(error)
            }
        }
    }



}

export default usersActions