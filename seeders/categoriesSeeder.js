'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        name: 'Contractor',
        description: 'Produk contractor terbaru',
        slug: 'contractor',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Trading Wholesaler',
        description: 'Produk wholesaler terbaru',
        slug: 'trading wholesaler',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Operator',
        description: 'Produk operator terbaru',
        slug: 'operator',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};