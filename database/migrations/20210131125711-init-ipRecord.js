'use strict';

const tableName = 'ipRecords';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable(
      tableName,
      {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        loginIp: STRING(20),
        createdAt: {
          type: DATE,
          defaultValue: Sequelize.literal('NOW()'),
        },
        updatedAt: {
          type: DATE,
          defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()'),
        },
      },
      {
        charset: 'utf8', // default: null
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
