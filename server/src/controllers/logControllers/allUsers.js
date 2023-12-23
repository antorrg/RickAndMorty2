const {User}= require('../../database')

const allUsers=async ()=>{
 try {
    const users = await User.findAll();
    return users;
 } catch (error) {
    console.error("¡Algo malo pasó acá (tenia que devolver usuarios!", error);
    throw error;
 }
}

module.exports = allUsers;