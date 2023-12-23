const axios= require('axios');
const { infoCleaner } = require('../helpers');
require ('dotenv').config();
const {URL} = process.env;

const charUsersApi = async()=>{
    
    try {
    
        const gamesAPI = [];
    for(let page = 1; page<=6; page++){
    const url = `${URL}/character/?page=${page}`
    const infoApi = (await axios.get(url)).data;
    const gamesFiltered = infoCleaner(infoApi);
    gamesAPI.push(gamesFiltered)
    }
    
    const gamesApiF = gamesAPI.flat(1);
    return gamesApiF;
    } catch (error) {
        throw new Error({error:error.message})
    }
}
 const charByName= async (name)=>{
    try {
        const infoApi = (await axios.get(`${URL}/character/?name=${name}`)).data;
        const characterApi = infoCleaner(infoApi);
        const characterFiltered = characterApi.filter(char => char.name.toLowerCase() === name.toLowerCase());
        if(characterFiltered.length>0){
            return characterFiltered;
        }
        return characterApi;
    } catch (error) {
        throw error;
    }
 }

const charUserId = async (id)=>{
    try {
        const infoDetail= (await axios.get(`${URL}/character/${id}`)).data;
        return infoDetail;
    } catch (error) {
        throw new Error({error:error.message})
    }
}

module.exports = {
    charUsersApi,
    charByName,
    charUserId
};