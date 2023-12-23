const favDb =require('../../controllers/logControllers/favDb');
const allUsers=require('../../controllers/logControllers/allUsers')
const findAddFav = require('../../controllers/logControllers/findAddFav');
const delFavorite = require('../../controllers/logControllers/delFavorite')
const favAll =require('../../controllers/logControllers/favAll')

const favUsers = async(req, res)=>{
    try {
        const response = await(favDb(req,res));
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

const addFav = async (req, res)=>{

    try {
        const resp = await(findAddFav(req, res))
        res.status(201).json(resp);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteFav = async(req, res)=>{
    const userId = req.user.userId;
    const { id } = req.params;
    try {
        const del = await(delFavorite(id, userId));
        res.status(200).json(del);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const favUsers2 = async(req, res)=>{
    try {
        const response = await(favAll(req,res));
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {favUsers2, favUsers, getUsers, addFav, deleteFav};