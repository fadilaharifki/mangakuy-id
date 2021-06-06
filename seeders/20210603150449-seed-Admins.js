'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Admins', [
     {
       name: 'admin',
       username: 'admin',
       password: '$2a$05$c.t6ZVG1qAKRLo6m3nMUM.YMXgr5tjpYz6kUoS/XXgMXz.xYg.kBu',
       email: 'admin@mail.com',
       createdAt: new Date(),
       updatedAt: new Date()
     }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Admins', null)
  }
};
