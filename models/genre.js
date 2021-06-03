'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsToMany(models.Comic,{through:"ComicGenre"})
    }
  };
  Genre.init({
    genreName: {
      type: DataTypes.STRING,
      validate:{
        isText(value){
          if(!value){
            throw new Error("Genre tidak boleh kosong")
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};