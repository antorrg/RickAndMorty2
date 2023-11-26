const signin  = require("../../controllers/authControllers/userLogin");

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

module.exports=auth;