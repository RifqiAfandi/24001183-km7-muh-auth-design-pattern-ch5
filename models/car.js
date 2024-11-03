'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Car.init({
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    available: {
      type: DataTypes.BOOLEAN,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastUpdatedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deletedBy: {
      type: DataTypes.STRING,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
    
  }, {
    sequelize,
    modelName: 'Car',
    paranoid: true,
  });
  return Car;
};