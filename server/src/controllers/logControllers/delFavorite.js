const {User, Favorite}= require('../../database');

const delFavorite = async(favId, userId)=>{
    console.log(favId + ' favorito')
    console.log(userId + ' usuario')
   
    try {
        const user = await User.findByPk(userId);
        if (!user) {throw new Error('User not found.');}

        const favorite = await Favorite.findByPk(favId);
        if (!favorite) {throw new Error('Favorite not found.');}

        await user.removeFavorite(favorite);
        return favId;

    } catch (error) {
        throw error;
    }

}
module.exports = delFavorite;