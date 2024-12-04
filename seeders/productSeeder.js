'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Ambil ID kategori yang sudah ada
    const categories = await queryInterface.sequelize.query(
      'SELECT id FROM categories',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );

    return queryInterface.bulkInsert('products', [
      {
        name: 'Rotari Swivale', 
        category_id: 1, 
        description: 'Swivale berputar',
        price: 80000,
        stock: 10,
        image: '1733209338400-swivel.webp',  
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Shut-Off Valve', 
        category_id: 1, // Kategori Smartphone
        description: 'Swivale Yang diam',
        price: 467500, 
        stock: 15,
        image: '1733209338400-swivel.webp', 
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Swevel 3/4 (BEBEK)', 
        category_id: 1, // Kategori Smartphone
        description: 'Swivale 3/4 seperti bebek kwek kwek',
        price: 120000, 
        stock: 20,
        image: '1733209338400-swivel.webp',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Switch Hub', 
        category_id: 1, // Kategori Aksesoris
        description: 'Switch hub untuk pemasangan swivale',
        price: 5500000, 
        stock: 50,
        image: '1733209338400-swivel.webp',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'X-Printer 420B USB + Bluetooth ', 
        category_id: 2, // Kategori Komputer
        description: 'printer ini bisa pakai blutut',
        price: 1155000, 
        stock: 8,
        image: '1733209338400-swivel.webp',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Nozzle OPW Ori', 
        category_id: 2, // Kategori Komputer
        description: 'kepala untuk isi bensin',
        price: 590000, 
        stock: 8,
        image: '1733209338400-swivel.webp',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'ATG SS 160 + WindBEEL Smart Console ', 
        category_id: 2, // Kategori Komputer
        description: 'mahal betul jir',
        price: 17500000, 
        stock: 8,
        image: '1733209338400-swivel.webp',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Seragam Operator SPBU', 
        category_id: 3, // Kategori Komputer
        description: 'Seragam operator spbu',
        price: 150000,  
        stock: 8,
        image: '1733209338400-swivel.webp',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Rompi Control Petugas Pertamina',  
        category_id: 3, // Kategori Komputer
        description: 'Rompi control petugas pertamina terkuat di bumi',
        price: 150000,
        stock: 8,
        image: '1733209338400-swivel.webp',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Topi', 
        category_id: 3, // Kategori Komputer
        description: 'Topi geming',
        price: 25000,  
        stock: 8,
        image: '1733209338400-swivel.webp',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};