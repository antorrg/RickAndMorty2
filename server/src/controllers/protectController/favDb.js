const Favorite = require('../../database')

const favDb = async()=>{
    try {
        const data = await User.findOne({
            include: [
                {
                  model: Favorite,
                  attributes: ["id", "name", "gender","status", "species", "image"],
                  through: { attributes: [] },
                },]
        });
        return data;
        
    } catch (error) {
        
    }
}

module.exports= favDb;