'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      email: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      account: {
        type: Sequelize.STRING(20),
        unique: true,
      },
      avatar: {
        type: Sequelize.STRING,
        defaultValue: 'https://i.imgur.com/Lq0dUBY.png',
      },
      introduction: {
        type: Sequelize.TEXT,
      },
      role: {
        type: Sequelize.STRING
      },
      cover: {
        type: Sequelize.STRING,
        defaultValue: 'https://i.imgur.com/cZf8DWn.png',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
