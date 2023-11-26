const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Post", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.INTEGER,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    body:{type: DataTypes.TEXT, allowNull: false},
  },
  {
    timeStamps: false,
  });
};
