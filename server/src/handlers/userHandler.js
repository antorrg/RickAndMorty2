const {charUsersApi, charUserId} = require('../controllers/userController')

const charUsers= async (req,res)=>{
   try {
       const response = await charUsersApi()
       res.status(200).json(response);
    
   } catch (error) {
       res.status(404).json({error:error.message});
    
   }
};

const charUserById = async(req, res)=>{
    const {id} = req.params;
    try {
        const response=await charUserId(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}

module.exports= {
    charUsers,
    charUserById
};