'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comic.belongsToMany(models.Genre,{through:"ComicGenre"})
    }

    lowerCase(){
      return this.author.toLowerCase()
    }
  };
  Comic.init({
    title: {
      type: DataTypes.STRING,
      validate:{
        isText(value){
          if(!value){
            throw new Error("Title tidak boleh kosong")
          }
        }
      }
    },
    author: {
      type: DataTypes.STRING,
      validate:{
        isText(value){
          if(!value){
            throw new Error("Author tidak boleh kosong")
          }
        }
      }
    },
    publicationYear: {
      type: DataTypes.INTEGER,
      validate:{
        isText(value){
          if(!value){
            throw new Error("Publication Year tidak boleh kosong")
          }
        }
      }
    },
    postBy: DataTypes.STRING,
    price: {
      type: DataTypes.INTEGER,
      validate:{
        isText(value){
          if(!value){
            throw new Error("Price tidak boleh kosong")
          }
        }
      }
    },
    picture: {
      type: DataTypes.STRING,
      validate:{
        isText(value){
          if(!value){
            throw new Error("Link tidak boleh kosong")
          }
        }
      }
    },
    rating: {
      type: DataTypes.STRING,
      validate:{
        isText(value){
          if(!value){
            throw new Error("Rating tidak boleh kosong")
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Comic',
    hooks:{
      beforeCreate: (comic)=>{
        comic.postBy = 'MangaKuy Id'
      }
    }
  });
  return Comic;
};