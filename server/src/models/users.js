const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    nickname:{type: DataTypes.STRING, allowNull: true},
    given_name: { type: DataTypes.STRING, allowNull: true },
    picture: { type: DataTypes.STRING, allowNull: true },
    sub:{type: DataTypes.STRING, allowNull:false},
    permissions:{type: DataTypes.SMALLINT, allowNull: false,defaultValue: 0,
      validate: {
        isIn: [[0, 1, 2]], // Por ejemplo, 0: User, 1: Poster, 2: Admin
      },},
    created: { type: DataTypes.BOOLEAN, defaultValue: true },
  },
  {
    timeStamps: false,
  });
};
