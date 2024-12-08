const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ghoniyyunputra_guiderace', 'ghoniyyunputra_guiderace', '5a6a9f6736a7cd78f4afb8b04100e1a96c13bae6', {
  host: 'yvgup.h.filess.io',
  dialect: 'mysql',
  port: 3307,
  dialectOptions: {
    ssl: {
      require: true, // biasanya diperlukan untuk koneksi cloud
      rejectUnauthorized: false // opsional, tergantung konfigurasi SSL Anda
    }
  },
  timezone: '+07:00',
  logging: false
});

module.exports = sequelize; 