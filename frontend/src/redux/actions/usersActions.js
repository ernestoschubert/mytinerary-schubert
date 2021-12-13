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
                    console.log(response.data.response)
                    dispatch({type: 'LOG_USER', payload: response.data.response})
                } else {
                    alert(response.data.response)
                }
                return response
            } catch(error) {
                console.log(error)
            }
        }
    },
    logOut: () => {
        return async (dispatch, getState) => {
            dispatch({type: "LOG_OUT"})
        }
    },
    signInUserLS: (token) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.get('http://localhost:4000/api/verifytoken', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        }
                })
                dispatch({type:"LOG_USER", payload:{token, firstName:response.data.firstName, lastName: response.data.lastName, userImg: response.data.userImg}})
            }catch(error) {
                console.log(error)
               return  dispatch({type:'LOG_OUT' })
            }
        }
    }



}

export default usersActions
