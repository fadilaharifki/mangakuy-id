'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ComicGenres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ComicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Comics',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      GenreId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Genres',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ComicGenres');
  }
};