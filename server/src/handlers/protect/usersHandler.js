const favDb =require('../../controllers/protectController/favDb');
const allUsers=require('../../controllers/protectController/allUsers')


const usersHandler = async(req, res)=>{
    try {
        const response = await(favDb);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getUsers = async(req,res)=>{
    try {
        const resp = await(allUsers());
        res.status(200).json(resp);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {usersHandler, getUsers};