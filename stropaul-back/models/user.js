'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INT
    },
    alias: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },

      last_name: {
        type: DataTypes.STRING,
        allowNull: true
      },
}, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
