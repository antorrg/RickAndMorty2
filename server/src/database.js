const {Sequelize}=require('sequelize');
const CreateUser=require('./models/users');
const PostFavorite=require('./models/favorite')
const CreatePost=require('./models/post')

require('dotenv').config();

const{DB_USER, DB_PASS,DB_HOST,DB_NAME}=process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`,
{logging:false, native: false}
);

CreateUser(sequelize);
PostFavorite(sequelize)
CreatePost(sequelize)
const {User, Favorite, Post} = sequelize.models;
//Aqui voy a declarar la relacion:
Favorite.belongsToMany(User, {through: 'user_fav'});
User.belongsToMany(Favorite, {through: 'user_fav'});
User.hasOne(Post);
Post.belongsTo(User);




module.exports = {
    sequelize, 
    ...sequelize.models
}