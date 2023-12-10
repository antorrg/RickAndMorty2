import axios from 'axios';
import {setAuthHeader,  handleApiError} from '../utils/AxiosUtils'
import {
    GET_CHARACTERS,
    SET_CURRENT_PAGE,
    SET_BY_ID,
    CLEAN_STATE,
    ADD_FAV,
    REMOVE_FAV,
    FILTER,
    ORDER,
    GET_BY_NAME,
    LOG,
    CLEAN_LOG
} from './actions-types';



export const getCharacters = () => async (dispatch)=>{
    try {
        const response = await axios('/api/character')
        const data =response.data;
        return dispatch({
            type:GET_CHARACTERS,
            payload:data,
        })
    } catch (error) {
        alert('Character not found')
    }
}
export const getById =(id, token)=>async(dispatch)=>{
    try {
        const response = await axios(`/api/character/${id}`,setAuthHeader(token))
        const data = response.data;
        return dispatch({
            type:SET_BY_ID,
            payload:data
        })
    } catch (error) {
        handleApiError(error);
        throw error; 
    }
}
export const getByName=(name)=>async(dispatch)=>{
    try {
        const response = await axios(`/api/character/?${name}`)
        const data =response.data;
        return dispatch({
            type:GET_BY_NAME,
            payload:data,
        })
    } catch (error) {
        
    }
}

export const setCurrentPage = (page) => {
    return (dispatch) => {
      dispatch({
        type: SET_CURRENT_PAGE,
        payload: page,
      });
    };
  };

  export const cleanState =(payload)=>{
    return{
      type: CLEAN_STATE,
      payload,
    }
   }
   export const login= (userData)=>{
    return {
        type: LOG,
        payload:userData,
    }
   }
   export const limpiarLogin =(payload)=>{
    return {
        type:CLEAN_LOG,
        payload,
    }
   }
//?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
export const addFav = (character)=> {
    return {type: ADD_FAV, 
        payload: (character)}
};

export const removeFav = (id)=> {
    return {type: REMOVE_FAV, 
            payload:(id)
    }
};

export const filterFav = (gender)=>{
    return {
        type: FILTER,
        payload: (gender)
    }
}

export const orderFav = (order) => {
    return{
        type: ORDER,
        payload:(order)
    }
}