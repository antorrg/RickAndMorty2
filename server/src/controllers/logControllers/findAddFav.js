const {Favorite, User}=require('../../database');

const findAddFav = async(req, res)=>{
    const userId = req.user.userId ;
    const {id, name, gender,status, species, image}=req.body;
   
    const user = await User.findByPk(userId);
    try {
        const existingFav = await Favorite.findByPk(id);
        if(existingFav){
            const userHasFavorite = await user.hasFavorite(existingFav);

            if (userHasFavorite) {
              throw new Error('The user already has this favorite' );
            }
            try {
                await user.addFavorite(existingFav);
                const fav=existingFav;
                return fav;
            } catch (error) {
                throw new Error('Error al asignar Favorito');
            }
        }else{
            try {
                const newFav = await Favorite.create({
                    id,
                    name,
                    gender,
                    status,
                    species,
                    image
                })
                await user.addFavorite(newFav);
                const fav = newFav;
                console.log(fav)
                return fav;
            } catch (error) {
                throw new Error('Error al crear Favorito');
            }
        }
    } catch (error) {
        throw error; 
    }
}

module.exports = findAddFav;

