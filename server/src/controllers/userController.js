const axios= require('axios');
const { infoCleaner } = require('../helpers');
require ('dotenv').config();
const {URL} = process.env;

const getUsersApi = async()=>{
    
    try {
    //     const usAPI = [];
    // for(let page = 1; page<=5; page++){
    // const url = `${URL}/users?page=${page}`

    // const usersApi = (await axios.get(url)).data;
    // usAPI.push(usersApi)
    // }
    //const infoApi = usAPI.flat(1);
        const infoApi = (await axios.get(`${URL}/character`)).data;
        const infoWash= infoCleaner(infoApi);
        return infoWash;
    } catch (error) {
        throw new Error({error:error.message})
    }
}

const getUserId = async (id)=>{
    try {
        const infoDetail= (await axios.get(`${URL}/character/${id}`)).data;
        return infoDetail;
    } catch (error) {
        throw new Error({error:error.message})
    }
}

module.exports = {
    getUsersApi,
    getUserId
};