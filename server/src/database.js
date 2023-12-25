const {Sequelize}=require('sequelize');
const CreateUser=require('./models/users');
const PostFavorite=require('./models/favorite')

require('dotenv').config();

const{DB_USER, DB_PASS,DB_HOST,DB_NAME}=process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
{logging:false, native: false}
);

CreateUser(sequelize);
PostFavorite(sequelize)
const {User, Favorite, } = sequelize.models;
//Aqui voy a declarar la relacion:
Favorite.belongsToMany(User, {through: 'user_fav'});
User.belongsToMany(Favorite, {through: 'user_fav'});





module.exports = {
    sequelize, 
    ...sequelize.models
}