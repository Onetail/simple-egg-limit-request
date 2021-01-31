'use strict';

const tableName = 'ipRecords';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      tableName,
      [
        {
          id: 1,
          loginIp: '127.0.0.1',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
