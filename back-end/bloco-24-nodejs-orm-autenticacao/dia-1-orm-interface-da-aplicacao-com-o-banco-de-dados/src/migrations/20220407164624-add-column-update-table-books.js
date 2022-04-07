'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('Books', 'updated_at', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Books', 'updated_at');
  }
};
