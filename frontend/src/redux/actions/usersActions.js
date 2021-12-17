const axios = require('axios');


const usersActions = {

    signUpUser: (newUser) => {
        return async(dispatch, getState) => {    
            const response = await axios.post('http://localhost:4000/api/users/signup', {...newUser})
            if(response.data.success) {
                dispatch({type:'LOG_USER', payload: response.data.response});
            } else {
                console.error(response)
            }
        }
    },
    signInUser: (logInUser) => {
        return async(dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/users/signin', {...logInUser})
            if(response.data.success){
                dispatch({type: 'LOG_USER', payload: response.data.response})
            } else {
                console.error(response.data.response)
            }
            return response
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
                const userCheck = {
                    token,
                    firstName:response.data.firstName, 
                    lastName: response.data.lastName, 
                    userImg: response.data.userImg, 
                    _id: response.data._id
                }
                dispatch({type:"LOG_USER", payload: userCheck})
            }catch(error) {
                console.error(error)
               return  dispatch({type:'LOG_OUT' })
            }
        }
    },
    getCountries: () => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.get('https://restcountries.com/v2/all?fields=name')
                dispatch({type: 'GET_ALL_COUNTRIES', payload: response.data})
            } catch(error){
                console.error(error)
            }
        }
    }



}

export default usersActions
