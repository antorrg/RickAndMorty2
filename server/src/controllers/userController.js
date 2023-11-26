const axios= require('axios');
const { infoCleaner } = require('../helpers');
require ('dotenv').config();
const {URL} = process.env;

const charUsersApi = async()=>{
    
    try {
    
        const gamesAPI = [];
    for(let page = 1; page<=3; page++){
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


const charUserId = async (id)=>{
    try {
        const infoDetail= (await axios.get(`${URL}/character/${id}`)).data;
        return infoDetail;
    } catch (error) {
        throw new Error({error:error.message})
    }
}
// const gameByName = async(name)=>{
//     try {
//       const infoApi = (await axios.get(`${URL}character/?name=${name}`)).data;
//       const gameApi = infoCleaner(infoApi);
//       const gameFiltered = gameApi.filter(game => game.name.toLowerCase() === name.toLowerCase());
//       if(gameFiltered.length>0){
//           return gameFiltered;
//       }
    //   // Si no se encontró en la API, busca en la base de datos
    //   const gameDB = await Videogame.findAll({ where: { name: name }, include: [{
    //       model: Genre, attributes: ['name'], through: { attributes: []} }] });
    //   if(gameDB.length === 0){
    //       throw new Error("Videogame not found");
    //   }
    //   return gameDB;
  
//     } catch (error) {
//       throw new Error({error:error.message})
//     }
    
//   };
  
module.exports = {
    charUsersApi,
    charUserId
};