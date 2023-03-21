'use strict';
// npx sequelize-cli seed:generate --name demo-energy
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Energies', [
      {
        date: '2022-06-06',
        consumption: '81',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2022-06-07',
        consumption: '95',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2022-06-08',
        consumption: '84',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2022-06-09',
        consumption: '79',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2022-06-10',
        consumption: '96',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2022-06-11',
        consumption: '108',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2022-06-12',
        consumption: '96',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2023-03-01',
        consumption: '93',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2023-03-07',
        consumption: '100',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        date: '2023-03-21',
        consumption: '81',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
