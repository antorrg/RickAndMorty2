const {charUsersApi, charByName, charUserId} = require('../controllers/characterController')

const charUsers= async (req,res)=>{
    const {name}= req.query;
   try {
      if(name){
        const response = await charByName(name);
        res.status(200).json(response)
      }else{
       const response = await charUsersApi(req, res)
       res.status(200).json(response);
      }
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