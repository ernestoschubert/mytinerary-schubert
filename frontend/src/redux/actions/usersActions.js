const axios = require('axios');

const usersActions = {

    signUpUser: (newUser) => {
        return async(dispatch, getState) => {
            try {    
                const response = await axios.post('http://localhost:4000/api/users/signup', {...newUser})
                if(response.data.success) {
                    dispatch({type:'LOG_USER', payload: response.data.response});
                } else {
                    response.data.errors.map(error => {
                        return alert(error.message)
                    })
                }
            } catch(error) {
                console.error(error)
            }
        }
    },

    signInUser: (logInUser) => {
        return async(dispatch, getState) => {
            try {
                const response = await axios.post('http://localhost:4000/api/users/signin', {...logInUser})
                if(response.data.success){
                    dispatch({type: 'LOG_USER', payload: response.data.response})
                } else {
                    alert(response.data.response)
                }
                return response
            } catch(error) {
                console.log(error)
            }
        }
    }



}

export default usersActions
