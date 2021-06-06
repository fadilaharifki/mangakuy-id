'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ComicGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ComicGenre.belongsTo(models.Comic)
      ComicGenre.belongsTo(models.Genre)
    }
  };
  ComicGenre.init({
    ComicId:{
      type: DataTypes.INTEGER,
      references:{
        model: 'Comics',  
        key:'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    GenreId: {
      type: DataTypes.INTEGER,
      references:{
        model: 'Genres',
        key:'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
  }, {
    sequelize,
    modelName: 'ComicGenre',
  });
  return ComicGenre;
};