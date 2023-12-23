const { Favorite, User } = require('../../database');

const favDb = async (req, res) => {
    const userId = req.user.userId;

    try {
        const user = await User.findByPk(userId, {
            include: [
                {
                    model: Favorite,
                    attributes: ["id", "name", "gender", "status", "species", "image"],
                    through: { attributes: [] },
                },
            ],
        });

        if (!user) {
           throw new Error('Usuario no encontrado.');
        }

        const favorites = user.Favorites; // Aquí asumimos que el alias es "Favorites"

        return favorites;
    } catch (error) {
        console.error(error);
       throw error;
    }
};

module.exports = favDb;
