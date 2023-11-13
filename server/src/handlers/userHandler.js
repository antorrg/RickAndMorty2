const {getUsersApi, getUserId} = require('../controllers/userController')

const getUsers= async (req,res)=>{
   try {
       const response = await getUsersApi()
       res.status(200).json(response);
    
   } catch (error) {
       res.status(404).json({error:error.message});
    
   }
};

const getUserById = async(req, res)=>{
    const {id} = req.params;
    try {
        const response=await getUserId(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}

module.exports= {
    getUsers,
    getUserById
};