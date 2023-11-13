import {
    GET_CHARACTERS,
    SET_CURRENT_PAGE,
    SET_BY_ID,
    CLEAN_STATE
}from './actions-types';

const initialState = {
    character :[],
    characterById:[],
    currentPage: 1,
    totalPages: 1,
};
 const reducer =(state = initialState, {type, payload})=>{
    switch(type){
        case GET_CHARACTERS:
            console.log(payload)
            return {
                ...state,
                character: payload,
                totalPages: Math.ceil(payload.length / 4),
            }
        case  SET_BY_ID:
            console.log(payload)
            return {
                ...state,
                characterById:payload,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage:payload,
            }
            case CLEAN_STATE:
    return{
      ...state,
      characterById:[],
    }
    
        default:
            return{
                ...state,
            }
    }

}
export default reducer;