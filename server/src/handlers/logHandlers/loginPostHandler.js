const {signin, userUpd}  = require("../../controllers/authControllers/userLogin");

const auth = async(req, res)=>{
    const {email, nickname, given_name, picture, sub}=req.body;
    //console.log(req.body+ ' hasta aquí el handler')
    try{
        const envio = await signin(email, nickname, given_name, picture, sub);
        res.status(201).json(envio);
    }catch(error){
        res.status(404).json({error:error.message});
    }


}

const updateUsersRol=async(req,res)=>{
    const{id}=req.params; 
    const role =req.body;
    console.log(id+'  el id desde el handler')
    console.log(role +'  el rol desde el handler')
    try {
        const upd = await(userUpd(id, role))
        res.status(200).json(upd);
    
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports={
    auth,
    updateUsersRol
};