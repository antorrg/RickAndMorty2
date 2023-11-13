import axios from 'axios';
import {
    GET_CHARACTERS,
    SET_CURRENT_PAGE,
    SET_BY_ID,
    CLEAN_STATE
} from './actions-types';

export const getCharacters = () => async (dispatch)=>{
    try {
        const response = await axios('/character')
        const data =response.data;
        return dispatch({
            type:GET_CHARACTERS,
            payload:data,
        })
    } catch (error) {
        alert('Users not found')
    }
}
export const getById =(id)=>async(dispatch)=>{
    try {
        const response = await axios(`/character/${id}`)
        const data = response.data;
        return dispatch({
            type:SET_BY_ID,
            payload:data
        })
    } catch (error) {
        alert("User's detail not found")
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