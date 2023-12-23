const {Favorite}= require('../../database')

const favAll=async ()=>{
 try {
    const users = await Favorite.findAll();
    return users;
 } catch (error) {
    console.error("¡Algo malo pasó acá (tenia que devolver favoritos!", error);
    throw error;
 }
}

module.exports = favAll;